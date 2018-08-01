"use strict";
var material_icons = function () {
    "use strict";
    function is_display_type(display_type) {
        return $('.display-type').css('content') == display_type || $('.display-type').css('content') == '"' + display_type + '"';
    }

    function not_display_type(display_type) {
        return $('.display-type').css('content') != display_type && $('.display-type').css('content') != '"' + display_type + '"';
    }

    if ($('#ckeditorEmail').length) {
        CKEDITOR.config.uiColor = '#ffffff';
        CKEDITOR.config.toolbar = [ [ 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About' ] ];
        CKEDITOR.config.height = 110;
        CKEDITOR.replace('ckeditor1');
    }

    // EMAIL MOBILE SHOW MESSAGE
    $('.pvr-item').on('click', function () {
        $('.pvr-email-w').addClass('forse-show-content');
    });

    if ($('.pvr-email-w').length) {
        if (is_display_type('phone') || is_display_type('tablet')) {
            $('.pvr-email-w').addClass('compact-side-menu');
        }
    }
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