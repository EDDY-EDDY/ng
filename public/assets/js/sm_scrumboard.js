"use strict";
var material_icons = function () {
    "use strict";
    $(function () {
        if ($('.scrumboard').length) {
            // INIT DRAG AND DROP FOR scrumboard ITEMS
            var dragulaObj = dragula($('.scrumboard-body').toArray(), {}).on('drag', function () {
            }).on('drop', function (el) {
            }).on('over', function (el, container) {
                $(container).closest('.scrumboard-body').addClass('over');
            }).on('out', function (el, container, source) {

                var new_pipeline_body = $(container).closest('.scrumboard-body');
                new_pipeline_body.removeClass('over');
                var old_pipeline_body = $(source).closest('.scrumboard-body');
            });
        }

        // #16. OUR OWN CUSTOM DROPDOWNS
        $('.sm_drop_open').on('mouseenter', function () {
            $(this).addClass('over');
        });
        $('.sm_drop_open').on('mouseleave', function () {
            $(this).removeClass('over');
        });


        var e = $(".sm_scrumboard .col-lg-3");
        $(e).sortable({
            handle     : ".scrumboard-header",
            connectWith: ".sm_scrumboard .col-lg-3",
            update     : function (event, ui) {
                $(event.target).append($(ui.item[ 0 ]).next()[ 0 ]);
                $($(ui.item[ 0 ]).next()[ 0 ]).remove();

            },
        })
    })
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