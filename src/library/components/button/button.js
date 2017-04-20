// Button function
// -------------------------------------------
var MDS = MDS || {};

MDS.button = function () {
    'use strict';

    // MDS Selector wrapper
    // var mdsData = function () {
    //     return document.querySelectorAll('[data-mds-control]');
    // };

    // var bindClick = function (attr) {
    //     var elem = mdsData(attr);

    //     var clickType = function() {
    //         var control = this.getAttribute('data-mds-control');

    //         // Ensure associated control isn't empty
    //         if (control.length) {
    //             var actions = control.split(':');

    //             if(actions) {
    //                 MDS[actions[0]](actions[1]);
    //             }
    //         }
    //     };

    //     for (var i = 0; i < elem.length; i++) {
    //         var self = elem[i];
    //         self.onclick = clickType;
    //     }
    // }

    // return {
    //     bindClick: bindClick
    // };

}();

// Bind click events
// MDS.button.bindClick();
