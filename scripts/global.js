'use strict';
var Esds = Esds || {};

// Polyfill closest() for IE 11 & Edge 14
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        /* eslint-disable consistent-this */
        var el = this;
        var ancestor = this;
        /* eslint-enable consistent-this */
        if (!document.documentElement.contains(el)) {
            return null;
        }
        do {
            if (ancestor.matches(s)) {
                return ancestor;
            }
            ancestor = ancestor.parentElement;
        } while (ancestor !== null);
        return null;
    };
}


Esds.Utils = function() {
    const getArrayOfDomElements = function getArrayOfDomElements(selector, parent) {
        parent = typeof parent === 'undefined' ? document : parent;
        return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
    };

    return {
        getArrayOfDomElements: getArrayOfDomElements
    };
}();
