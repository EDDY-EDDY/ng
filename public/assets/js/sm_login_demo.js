"use strict";
var changeBackground = function () {
        $('[data-click="change-bg"]').on("click", function (a) {
            a.preventDefault();
            var b = '[data-id="login-cover-image"]',
                c = $(this).find("img").attr("src"),
                d = '<img src="' + c + '" data-id="login-cover-image" />';
            $(".login-cover-image").prepend(d), $(b).not('[src="' + c + '"]').fadeOut("slow", function () {
                $(this).remove()
            }), $('[data-click="change-bg"]').closest("li").removeClass("active"), $(this).closest("li").addClass("active")
        })
    },
    Login = function () {
        "use strict";
        return {
            init: function () {
                changeBackground()
            }
        }
    }();
$(document).ready(function () {
    Login.init();
});