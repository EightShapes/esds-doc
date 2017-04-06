/*global $*/
/*global mdsDoc*/

mdsDoc.PageNav = function() {
    'use strict';

    var buildAnchorNav = function($nav) {
        const $target = $($nav.attr("data-target")),
              pageHeaderClass = $nav.attr("data-page-header-class"),
              $headers = $target.find(" > h2, > h3"),
              $listGroupTemplate = $nav.find(".mds-doc-page-nav__list-group-template"),
              $headerTemplate = $nav.find(".mds-doc-page-nav__header-template"),
              $linkTemplate = $nav.find(".mds-doc-page-nav__link-template"),
              $listGroupsWrap = $nav.find(".mds-doc-page-nav__list-groups-wrap");
        var listGroups = [],
            listGroup = [];

        $headers.each(function(){
            if ($(this).is('h2') && listGroup.length > 0) {
                listGroups.push(listGroup);
                listGroup = [];
                listGroup.push($(this));
            } else {
                listGroup.push($(this));
            }
        });
        listGroups.push(listGroup);

        listGroups.forEach(function(group){
            const $listGroup = $listGroupTemplate.clone().removeClass("mds-doc-page-nav__list-group-template").empty();

            group.forEach(function(listItem){
                if ($(listItem).is('h2')) {
                    const headerText = $(listItem).text(),
                          $listItem = $headerTemplate.clone().
                                      removeClass("mds-doc-page-nav__header-template").text(headerText);
                    $listGroup.append($listItem);
                } else {

                    const headerText = $(listItem).text(),
                          headerId = typeof $(listItem).attr("id") === 'undefined' ? headerText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : $(listItem).attr("id"),
                          $listItem = $linkTemplate.clone().
                                        removeClass("mds-doc-page-nav__link-template").
                                        find(".mds-list-group__item-label").text(headerText).end().
                                        find(".mds-list-group__link").attr("href", "#" + headerId).end();
                    $(listItem).attr("id", headerId);

                    if (typeof pageHeaderClass !== 'undefined') {
                        $(listItem).addClass(pageHeaderClass);
                    }

                    $listGroup.append($listItem);
                }


            });

            $listGroupsWrap.append($listGroup);
        });

        $listGroupTemplate.remove();
    };

    var initialize = function initialize() {
        $(".mds-doc-page-nav").each(function(){
            buildAnchorNav($(this));
        });
    };

    var public_vars = {
        'initialize': initialize
    };

    return public_vars;
}();


$(document).ready(function(){
    'use strict';
    mdsDoc.PageNav.initialize();
});
