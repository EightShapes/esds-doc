// Modal function
// -------------------------------------------
var MDS = MDS || {};

MDS.modal = function(id) {
    'use strict';

    var modalOpen = false, modalContainer;

    if (modalOpen) {
        hideModal();
    } else {
        var elemTrigger = document.activeElement;
        showModal();
    }

    function showModal() {

        // Modal content
        var modalContent = document.querySelector('section[data-id="' + id + '"]').cloneNode(true);

        // Add modal container if it doesn't exist already
        if (!document.getElementById('mds-modal')) {
            modalContainer = document.createElement('div');
            modalContainer.id = 'mds-modal';
            modalContainer.className = 'mds-modal';
            document.body.insertBefore(modalContainer, document.body.firstChild);
        } else {
            modalContainer = document.getElementById('mds-modal');
        }

        modalContainer.appendChild(modalContent);

        modalContainer.classList.add('mds-modal--open');

        // TODO - add scroll bars if after X height?
        // Check height vs content
        var modalWrapper = document.getElementById('mds-modal').querySelectorAll('.mds-modal__inner')[0];
        modalContent.style.height = modalWrapper.clientHeight + 'px';

        // We need to focus
        modalContent.setAttribute('aria-hidden', 'false');
        modalContainer.setAttribute('tabindex', '-1');
        modalContainer.focus();

        // All groovy, launch modal!
        setTimeout(openModal, 200);

        function openModal() {
            modalContainer.classList.add('mds-modal--active');
            modalOpen = true;
        }
    }

    function hideModal() {
        modalOpen = false;

        // Animate modal
        modalContainer = document.getElementById('mds-modal');
        modalContainer.classList.remove('mds-modal--active');

        // Destory modal after wait of 500ms
        setTimeout(destroyModal, 500);

        function destroyModal() {
            modalContainer.classList.remove('mds-modal--open');
            modalContainer.innerHTML = "";
        }
    }

    // Keep focus inside modal for accessibility
    document.addEventListener('focus', function(e) {
        if (modalOpen && !document.getElementById('mds-modal').contains(e.target)) {
            e.stopPropagation();
            modalContainer.focus();
        }
    }, true);

    // Close modal via Esc
    document.addEventListener('keydown', function(e) {

        if (modalOpen && e.keyCode === 27) {
            hideModal();
            elemTrigger.focus();
        }
    }, true);

    // Close modal via click
    var modalCloseButtons = document.querySelectorAll('[data-mds-modal-close]');

    function modalCloseListener(n) {
        modalCloseButtons[n].addEventListener('click', function() {
            if (modalOpen) {
                hideModal();
            }
        });
    }

    for (var i = 0; i < modalCloseButtons.length; i++) {
        modalCloseListener(i);
    }

};


