var popovers = document.querySelectorAll('.mds-popover--overlay-closable');
for (var i = 0; i < popovers.length; i++) {
    var popover = popovers[i];
    // Launch the popover from the trigger
    popover.querySelectorAll('.mds-popover__target')[0].onclick = function() {
        'use strict';
        this.nextElementSibling.style.display = "block";
        this.nextElementSibling.nextElementSibling.style.visibility = "visible";
        this.nextElementSibling.nextElementSibling.style.opacity = "1";
    };
    // Close popover if you click anywhere outside of it
    popover.querySelectorAll('.mds-popover__overlay')[0].onclick = function() {
        'use strict';
        this.style.display = "none";
        this.nextElementSibling.style.visibility = "hidden";
        this.nextElementSibling.style.opacity = "0";
    };
}
// Close all popovers on "esc" keydown
document.onkeydown = function keypress(e) {
    'use strict';
    e = e || window.event;
    if (e.keyCode === 27) {
        var closablePopovers = document.querySelectorAll('.mds-popover--overlay-closable');
        for (var j = 0; j < closablePopovers.length; j++) {
            var closablePopover = closablePopovers[j];

            closablePopover.querySelectorAll('.mds-popover__overlay')[0].style.display = "none";
            closablePopover.querySelectorAll('.mds-popover')[0].style.visibility = "hidden";
            closablePopover.querySelectorAll('.mds-popover')[0].style.opacity = "0";
        }
    }
};
var popover_dialogs = document.querySelectorAll('.mds-popover--dialog');
for (var k = 0; k < popover_dialogs.length; k++) {
    var popover_dialog = popover_dialogs[k];
    // Launch the popover from the trigger
    popover_dialog.querySelectorAll('.mds-popover__target')[0].onclick = function() {
        'use strict';
        this.nextElementSibling.style.display = "block";
        this.nextElementSibling.nextElementSibling.style.visibility = "visible";
        this.nextElementSibling.nextElementSibling.style.opacity = "1";
    };
}
// Close popover if you click the remove "X" icon
var removeLink = document.querySelectorAll('.mds-popover__close-button');
for (var l = 0; l < removeLink.length; l++) {
   removeLink[l].onclick = function() {
        'use strict';
        this.parentNode.parentNode.previousElementSibling.style.display = "none";
        this.parentNode.parentNode.style.visibility = "hidden";
        this.parentNode.parentNode.style.opacity = "0";
   };
}
// Close popover upon clicking "Cancel" or "Done" buttons
var theButtons = document.querySelectorAll('.mds-popover__button');
for (var m = 0; m < theButtons.length; m++) {
   theButtons[m].onclick = function() {
        'use strict';
        this.parentNode.parentNode.parentNode.previousElementSibling.style.display = "none";
        this.parentNode.parentNode.parentNode.style.visibility = "hidden";
        this.parentNode.parentNode.parentNode.style.opacity = "0";
   };
}
