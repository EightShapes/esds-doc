/*global $*/
/*global Clipboard*/

var Mds = Mds || {};
var projectNamespace = projectNamespace || 'mds';

Mds.CodeSnippet = function() {
    'use strict';
    var set_event_listeners = function() {
        var clipboard = new Clipboard('.' + projectNamespace + '-doc-code-snippet__copy'),
            clickedClass = projectNamespace + '-doc-code-snippet__copy--clicked',
            copiedResponseSelector = '.' + projectNamespace + '-doc-code-snippet__copied-response',
            copySuccessText = 'Copied!',
            copyErrorText = 'Press Ctrl + C to copy';

        clipboard.on('success', function(e) {
            $(e.trigger).removeClass(clickedClass);
            $(e.trigger)[0].offsetHeight;
            $(e.trigger).addClass(clickedClass).find(copiedResponseSelector).text(copySuccessText);
            e.clearSelection();
        });

        clipboard.on('error', function(e) {
            $(e.trigger).removeClass(clickedClass);
            $(e.trigger)[0].offsetHeight;
            $(e.trigger).addClass(clickedClass).find(copiedResponseSelector).text(copyErrorText);
        });

        $("body").on("click", '.' + projectNamespace + '-doc-code-snippet__copy', function(e){
            e.preventDefault();
        });
    };

    var initialize = function initialize() {
        set_event_listeners();
    };

    var public_vars = {
        'initialize': initialize
    };

    return public_vars;
}();


$(document).ready(function(){
    'use strict';
    Mds.CodeSnippet.initialize();
});
