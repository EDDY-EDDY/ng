"use strict";
var cookie = function () {
    "use strict";

    $('#cookie_modal').modal('toggle');

    if (!$.cookie('ppbox')) {
        $('#cookie_modal').modal('toggle');
    }

    $("#agree_cookie").on('click', function (e) {
        e.preventDefault();
        $('#cookie_modal').modal('hide');
    });

    $("#clearcookie").on('click', function (e) {
        e.preventDefault();
        $.removeCookie('ppbox', { path: '/' });
    });

    $('#cookie_modal').on('hide.bs.modal', function (e) {
        if($("#chkRemember").is(":checked")){
            $.cookie('ppbox', 'hideit', {expires: 2, path: '/'});
        }
    });

    $(".col-lg-4 .feature").find("a").on("click",function () {
       var id = $(this).attr("id");
       $("#cookie_modal").removeClass("left_top left_bottom right_top right_bottom top_center bottom_center");
       $("#cookie_modal").addClass(id);
        $('#cookie_modal').modal('toggle');
    });

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