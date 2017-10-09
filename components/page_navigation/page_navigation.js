/* global scrollMonitor */

'use strict';
var Esds = Esds || {};

Esds.PageNavigation = function() {
    const pageNavigationSelector = ".esds-doc-page-navigation",
            pageNavigationListSelector = ".esds-doc-page-navigation__inner",
            listItemTemplateSelector = ".esds-doc-page-navigation__item--template",
            listItemLinkSelector = ".esds-doc-page-navigation__link",
            listItemLinkActiveClass = "esds-doc-page-navigation__link--active",
            anchorLinkTargetDataAttribute = "data-esds-doc-anchor-link-target-selector",
            pageNavigationFixedClass = "esds-doc-page-navigation--fixed",
            suppressScrollMonitoringClass = "esds-doc-page-navigation--no-scroll-monitor";

    let pageNavigationComponents,
        listItemTemplate;

    function getPageNavigationComponents() {
        return document.querySelectorAll(pageNavigationSelector);
    }

    function getListItemId(anchorLinkItem) {
        let initialId = anchorLinkItem.getAttribute('id') === null ? anchorLinkItem.textContent : anchorLinkItem.getAttribute('id'),
            listItemId = initialId.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        listItemId = !isNaN(parseInt(listItemId.charAt(0), 10)) ? 'page-section-' + listItemId : listItemId; // If the header starts with a number, prefix it a string

        return listItemId;
    }

    function assignListItemIdToAnchorLinkItem(listItemId, anchorLinkItem) {
        anchorLinkItem.setAttribute('id', listItemId);
    }

    function createListItemElement(template, anchorLinkItem) {
        let listItemId = getListItemId(anchorLinkItem),
            href = '#' + listItemId,
            listItemElement = template.cloneNode(true),
            listItemLink = listItemElement.querySelector(listItemLinkSelector);
        listItemLink.setAttribute('href', href);
        listItemLink.textContent = anchorLinkItem.textContent;
        assignListItemIdToAnchorLinkItem(listItemId, anchorLinkItem);
        return listItemElement;
    }

    function getListItemTemplate(pageNavigation) {
        let domTemplate = pageNavigation.querySelector(listItemTemplateSelector),
            clonedTemplate = domTemplate.cloneNode(true); // Clone the template to a new element

        domTemplate.parentNode.removeChild(domTemplate); // Remove the template from the DOM
        clonedTemplate.classList.remove(listItemTemplateSelector); //Remove the --template class

        return clonedTemplate;
    }

    function buildPageNavigationListItems(pageNavigation) {
        const anchorLinkTargetSelector = pageNavigation.getAttribute(anchorLinkTargetDataAttribute),
            anchorLinkItems = anchorLinkTargetSelector === null ? false : document.querySelectorAll(anchorLinkTargetSelector),
            pageNavigationList = pageNavigation.querySelector(pageNavigationListSelector);

        if (anchorLinkItems) {
            listItemTemplate = getListItemTemplate(pageNavigation);
            anchorLinkItems.forEach(function(ali) {
                let listItem = createListItemElement(listItemTemplate, ali);
                pageNavigationList.appendChild(listItem);
            });
        }
    }

    function setWrapperWidth(pageNavigation) {
        const navWidth = pageNavigation.offsetWidth,
                fixedPositionList = pageNavigation.querySelector(pageNavigationListSelector);
        pageNavigation.style.width = navWidth;
        fixedPositionList.style.width = navWidth;
    }

    function setFixedPosition(pageNavigation, elementWatcher) {
        if (elementWatcher.isAboveViewport && !pageNavigation.classList.contains(pageNavigationFixedClass)) {
            pageNavigation.classList.add(pageNavigationFixedClass);
        } else if (!elementWatcher.isAboveViewport && pageNavigation.classList.contains(pageNavigationFixedClass)) {
            pageNavigation.classList.remove(pageNavigationFixedClass);
        }
    }

    function monitorPageNavigationFixedStatus(pageNavigation) {
        const distanceFromTop = pageNavigation.getAttribute('data-esds-doc-fixed-distance-from-top') === null ? 0 : pageNavigation.getAttribute('data-esds-doc-fixed-distance-from-top'),
            elementWatcher = scrollMonitor.create(pageNavigation, {top: distanceFromTop});

        setFixedPosition(pageNavigation, elementWatcher);
        elementWatcher.stateChange(function(){
            setFixedPosition(pageNavigation, elementWatcher);
        });
    }

    function scrollMonitoringEnabled(pageNavigation) {
        return !pageNavigation.classList.contains(suppressScrollMonitoringClass);
    }

    function setListItemActive(linkHref) {
        const activeLink = document.querySelector("a[href='" + linkHref + "']");

                const pageNavigation = activeLink.closest(pageNavigationSelector),
                highlightedLinks = pageNavigation.querySelectorAll("." + listItemLinkActiveClass);

        highlightedLinks.forEach(function(link){
            link.classList.remove(listItemLinkActiveClass);
        });

        activeLink.classList.add(listItemLinkActiveClass);
    }

    function monitorPageSectionsForActiveLinkHighlighting(pageNavigation) {
        const pageAnchorLinks = pageNavigation.querySelectorAll(listItemLinkSelector);
        for (var i = 0; i < pageAnchorLinks.length; i++) {
            let anchorLink = pageAnchorLinks[i],
                targetHref = anchorLink.getAttribute('href'),
                target = document.querySelector(targetHref),
                nextAnchorLink = pageAnchorLinks[i + 1],
                nextTargetHref = typeof nextAnchorLink === 'undefined' ? false : nextAnchorLink.getAttribute('href'),
                nextTarget = nextTargetHref ? document.querySelector(nextTargetHref) : false,
                sectionTop = target.offsetTop,
                sectionBottom = nextTarget ? nextTarget.offsetTop - 1 : document.body.offsetHeight,
                topMarker = document.createElement('div'),
                bottomMarker = document.createElement('div'),
                elementWatcher = scrollMonitor.create({top: sectionTop, bottom: sectionBottom});

            // When a section spans the entire viewport
            elementWatcher.stateChange(function(){
                if (scrollMonitoringEnabled(pageNavigation) && elementWatcher.isAboveViewport && elementWatcher.isBelowViewport) {
                    setListItemActive(targetHref);
                }
            });

            // Scroll Down Behavior
            elementWatcher.partiallyExitViewport(function(){
                if (elementWatcher.isAboveViewport) {
                    if (scrollMonitoringEnabled(pageNavigation) && nextTarget) {
                        // When one section exits the viewport at the top, set the next section's header to be active
                        setListItemActive(targetHref);
                    }
                }
            });

            // Scroll Up Behavior
            elementWatcher.enterViewport(function(){
                if (!elementWatcher.isBelowViewport) {
                    if (scrollMonitoringEnabled(pageNavigation)) {
                        setListItemActive(targetHref);
                    }
                }
            });

            // Highlight the last item in the nav when the last section is fully scrolled into view
            if (!nextTarget) {
                elementWatcher.fullyEnterViewport(function(){
                   if (scrollMonitoringEnabled(pageNavigation)) {
                       setListItemActive(targetHref);
                   }
                });
            }

            topMarker.style.width = "100%";
            topMarker.style.height = "1px";
            topMarker.style.backgroundColor = "red";
            topMarker.style.position = "absolute";
            topMarker.style.left = 0;
            topMarker.style.top = sectionTop;

            bottomMarker.style.width = "100%";
            bottomMarker.style.height = "1px";
            bottomMarker.style.backgroundColor = "blue";
            bottomMarker.style.position = "absolute";
            bottomMarker.style.left = 0;
            bottomMarker.style.top = sectionBottom;

            


            document.body.appendChild(topMarker);
            document.body.appendChild(bottomMarker);
        }
    }

    function initiateScrollMonitoring(pageNavigation) {
        monitorPageNavigationFixedStatus(pageNavigation);
        monitorPageSectionsForActiveLinkHighlighting(pageNavigation);
    }

    let init = function init() {
        pageNavigationComponents = getPageNavigationComponents();

        pageNavigationComponents.forEach(function(pn){
            buildPageNavigationListItems(pn);
            setWrapperWidth(pn);
            initiateScrollMonitoring(pn);
        });
    };

    return {
        init: init
    };
}();
