'use strict';
var Esds = Esds || {};

Esds.PageNavigation = function() {
    const pageNavigationSelector = ".esds-doc-page-navigation",
            listItemTemplateSelector = ".esds-doc-page-navigation__item--template",
            listItemLinkSelector = ".esds-doc-page-navigation__link",
            anchorLinkTargetDataAttribute = "data-esds-doc-anchor-link-target-selector";

    let pageNavigationComponents,
        listItemTemplate;

    function getPageNavigationComponents() {
        return document.querySelectorAll(pageNavigationSelector);
    }

    function getListItemId(anchorLinkItem) {
        let initialId = anchorLinkItem.getAttribute('id') === null ? anchorLinkItem.textContent : anchorLinkItem.getAttribute('id'),
            listItemId = initialId.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
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
            anchorLinkItems = anchorLinkTargetSelector === null ? false : document.querySelectorAll(anchorLinkTargetSelector);

        if (anchorLinkItems) {
            listItemTemplate = getListItemTemplate(pageNavigation);
            anchorLinkItems.forEach(function(ali) {
                let listItem = createListItemElement(listItemTemplate, ali);
                console.log(listItem);
                pageNavigation.appendChild(listItem);
            });
        }
    }

    let init = function init() {
        pageNavigationComponents = getPageNavigationComponents();

        pageNavigationComponents.forEach(function(pn){
            buildPageNavigationListItems(pn);
        });
    };

    return {
        init: init
    };
}();
