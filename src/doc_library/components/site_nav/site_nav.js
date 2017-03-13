/*global $*/

var Mds = Mds || {};
var projectNamespace = projectNamespace || 'mds';

Mds.SiteNav = function() {
    'use strict';
    var highlightActiveLink = function() {
        var currentPath = window.location.pathname;
            currentPath = currentPath === '/index.html' ? '/' : currentPath;

        var $activeLink = $('.mds-doc__navigation-link[href~="' + currentPath + '"]'),
            $parentAccordionTrigger = $activeLink.closest(".mds-doc__navigation-sublist").siblings(".mds-doc__navigation-sublist-toggle-input");

        $activeLink.addClass("mds-doc__navigation-link--active");

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
    Mds.SiteNav.initialize();
});
