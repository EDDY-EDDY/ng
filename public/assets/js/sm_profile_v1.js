"use strict";
var material_icons = function () {
    "use strict";
    var card = new Card({
        form     : '.interactive-credit-card',
        container: '.card-wrapper'
    });

    $("#current_password")._placeholder([ 'Current Password...' ], false);
    $("#new_password")._placeholder([ 'New Password...' ], false);
    $("#confirm_password")._placeholder([ 'Confirm Password...' ], false);

};
var icons = function () {
    "use strict";
    return {
        init: function () {
            material_icons();
        }
    }
}();
$(function () {
    icons.init();
});