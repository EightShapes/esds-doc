/*global $*/
/*global mdsDoc*/

mdsDoc.SiteNav = function() {
    'use strict';
    var highlightActiveLink = function() {
        const $activeIcon = $(".mds-doc-site-nav .mds-list-group__active-icon");

        var currentPath = window.location.pathname;
            currentPath = currentPath === '/index.html' ? '/' : currentPath;

        var $activeLink = $('.mds-doc-site-nav .mds-list-group__link[href~="' + currentPath + '"]'),
            $parentAccordionTrigger = $activeLink.closest(".mds-list-group__sublist").siblings(".mds-list-group__sublist-toggle-input");

        // Clear the active state from the first list item
        $('.mds-doc-site-nav .mds-list-group__item--active').removeClass("mds-list-group__item--active");
        $activeLink.parent("li").addClass("mds-list-group__item--active").append($activeIcon);

        if ($parentAccordionTrigger.length > 0) {
            $parentAccordionTrigger.prop('checked', true);
        }
    };

    var initialize = function initialize() {
        highlightActiveLink();
    };

    var public_vars = {
        'initialize': initialize
    };

    return public_vars;
}();


$(document).ready(function(){
    'use strict';
    mdsDoc.SiteNav.initialize();
});
