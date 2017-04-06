/*global mds*/

/**
 * Please note the following code is for document / demo only
 * It's the product team's decision / choice of using 3rd party or in-house code to implement the popups.
 * Please use a wrapper class mds-notification-container with modifier such as mds-notification-container--bottom-left as the container node of the mds-notification.
 * Please DO NOT invoke / self-invoke following function by default as library code.
 * */
mds.showNotificationPopup = function (message, showCloseButton, duration, containerPositionClass, notificationModifier) {
    'use strict';
    // Notification Popup DOM
    if (!containerPositionClass) {
        containerPositionClass = 'mds-notification-container--bottom-left';
    }
    var notificationContainer = document.createElement('div');
    notificationContainer.setAttribute('class', 'mds-notification-container ' + containerPositionClass);
    document.body.appendChild(notificationContainer);
    setTimeout(function () {
        if (notificationContainer.parentElement === document.body) {
            document.body.removeChild(notificationContainer);
        }
    }, duration ? duration : 2600);

    if (!notificationModifier) {
        notificationModifier = 'mds-notification--info';
    }
    var notificationBlock = document.createElement('div');
    notificationBlock.setAttribute('class', 'mds-notification ' + notificationModifier + (showCloseButton ? ' mds-notification--with-close-button' : ''));
    notificationContainer.appendChild(notificationBlock);

    var messageElement = document.createElement('span');
    messageElement.setAttribute('class', 'mds-notification__message');
    messageElement.appendChild(document.createTextNode(message ? message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue lacus felis, id volutpat sem dignissim sed.'));
    notificationBlock.appendChild(messageElement);
    if (showCloseButton) {
        var buttonElement = document.createElement('button');
        buttonElement.setAttribute('type', 'button');
        buttonElement.setAttribute('role', 'button');
        buttonElement.setAttribute('class', 'mds-notification__close-button');
        var closeGraphicHtmlString = '<svg class="mds-icon mds-notification__close-button-icon" aria-labelledby="title">'
            + '<title>remove</title>'
            + '<use xlink:href="/assets/icons/mds_icons.svg#remove"></use>'
            + '</svg>';
        buttonElement.insertAdjacentHTML('beforeend', closeGraphicHtmlString);
        buttonElement.addEventListener('click', function () {
            document.body.removeChild(notificationContainer);
        });
        notificationBlock.appendChild(buttonElement);
    }
};
