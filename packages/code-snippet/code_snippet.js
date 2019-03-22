'use strict';
var Esds = Esds || {};

Esds.CodeSnippet = function() {
    const copiedClass = 'esds-doc-code-snippet--show-copied-notification';

    function triggerCopiedEvent(snippet) {
        let event;

        if (window.CustomEvent) {
          event = new CustomEvent('esds-doc-code-snippet-copied', {detail: {snippet: snippet}});
        } else {
          event = document.createEvent('CustomEvent');
          event.initCustomEvent('esds-doc-code-snippet-copied', true, true, {snippet: snippet});
        }

        snippet.dispatchEvent(event);
    }

    function triggerCopyErrorEvent(snippet) {

    }

    function triggerCopyNotSupportedEvent(snippet) {

    }

    function copyCodeToClipboard(snippet) {
        const source = snippet.querySelector('.esds-doc-code-snippet__pre code');

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
        return Esds.Utils.getArrayOfDomElements('.esds-doc-code-snippet__copy-code-wrap');
    }

    function getSnippets() {
        return Esds.Utils.getArrayOfDomElements('.esds-doc-code-snippet');
    }

    function handleSuccessfulCopy(e) {
        const snippet = e.target;
        snippet.classList.add(copiedClass);
    }

    function resetCopiedState(snippet) {
        snippet.classList.remove(copiedClass);
    }

    function handleCopyButtonClick(e) {
        const trigger = e.target,
                snippet = trigger.closest('.esds-doc-code-snippet');
        resetCopiedState(snippet);
        copyCodeToClipboard(snippet);
    }

    function enableCopyFunctionality() {
        const triggers = getCopyTriggers();
        triggers.forEach(function(t){
            t.addEventListener('click', handleCopyButtonClick);
        });
    }

    function setCopiedListeners() {
        const snippets = getSnippets();
        snippets.forEach(function(s){
            s.addEventListener('esds-doc-code-snippet-copied', handleSuccessfulCopy);
        });
    }

    // Saving tab functionality for a future release
    // function initializeTabs() {
    //     const tabs = document.querySelectorAll('.esds-doc-code-snippet__tabs');
    //     tabs.forEach(function(t){
    //         const snippet = t.closest('.esds-doc-code-snippet');
    //     });
    // }

    let init = function init() {
        enableCopyFunctionality();
        setCopiedListeners();
        // initializeTabs();
    };

    return {
        init: init
    };
}();
