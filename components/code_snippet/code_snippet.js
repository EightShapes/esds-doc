'use strict';
var Esds = Esds || {};

Esds.CodeSnippet = function() {
    function triggerCopiedEvent(snippet) {
        let event;

        if (window.CustomEvent) {
          event = new CustomEvent('esds-code-snippet-copied', {detail: {snippet: snippet}});
        } else {
          event = document.createEvent('CustomEvent');
          event.initCustomEvent('esds-code-snippet-copied', true, true, {snippet: snippet});
        }

        snippet.dispatchEvent(event);
    }

    function triggerCopyErrorEvent(snippet) {

    }

    function triggerCopyNotSupportedEvent(snippet) {

    }

    function copyCodeToClipboard(e) {
        const trigger = e.target,
                snippet = trigger.closest('.esds-code-snippet'),
                source = snippet.querySelector('.esds-code-snippet__pre code');

        let textarea = document.createElement('textarea');
        textarea.style.height = '0';
        textarea.style.width = '0';
        textarea.style.position = 'absolute';
        textarea.style.left = '-99999px';
        snippet.appendChild(textarea);

        textarea.textContent = source.textContent;
        textarea.select();

        try {
          var successful = document.execCommand('copy');
          if (successful) {
            triggerCopiedEvent(snippet);
          } else {
            triggerCopyErrorEvent(snippet);
          }
          // var msg = successful ? 'successful' : 'unsuccessful';
        } catch (err) {
            triggerCopyNotSupportedEvent(snippet);
          // console.log('Oops, unable to copy');
        }

        snippet.removeChild(textarea);
    }

    function getCopyTriggers() {
        return document.querySelectorAll('.esds-code-snippet__copy-code-wrap');
    }

    function getSnippets() {
        return document.querySelectorAll('.esds-code-snippet');
    }

    function handleSuccessfulCopy(e) {
        const snippet = e.target;
        snippet.style.backgroundColor = 'hotpink';
    }

    function enableCopyFunctionality() {
        const triggers = getCopyTriggers();
        triggers.forEach(function(t){
            console.log(t);
            t.addEventListener('click', copyCodeToClipboard);
        });
    }

    function setCopiedListeners() {
        const snippets = getSnippets();
        snippets.forEach(function(s){
            s.addEventListener('esds-code-snippet-copied', handleSuccessfulCopy);
        });
    }

    let init = function init() {
        console.log("SOMETHING");
        enableCopyFunctionality();
        setCopiedListeners();
        // Find all copy triggers on the page
    };

    return {
        init: init
    };
}();
