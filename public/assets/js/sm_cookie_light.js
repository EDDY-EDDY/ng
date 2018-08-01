"use strict";
var cookie = function () {
    "use strict";
    var _container = jQuery(".mt-cookie-consent-btn");
    if (_container.length > 0) {
        $(".mt-cookie-consent-btn").on("click", function () {
            $(".pvr-cookie-consent-bar").addClass("animated fadeOutDown")
        });
    }
};
var CookiePage = function () {
    "use strict";
    return {
        init: function () {
            cookie();
        }
    }
}();
$(function () {
    CookiePage.init();
});