"use strict";
var material_icons = function () {
    "use strict";
    $('.summernote').summernote({
        placeholder: 'Hi, this is summernote. Please, write text here! Super simple WYSIWYG editor on Bootstrap',
        height: $(window).height() - $('.summernote').offset().top - 80
    });
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