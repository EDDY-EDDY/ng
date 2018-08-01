"use strict";
var material_icons = function () {
    "use strict";
    var count = 0;
    var classes = [ "theme_1", "theme_2", "theme_3", "theme_4" ];
    var length = classes.length;
    $(function () {
        function add_full_chat_message($input) {
            var val = $input.val();
            val = ($input.val() != "") ? $input.val() : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
            $('.chat-content').append('<div class="chat-message self animated fadeInRight"><div class="chat-message-content-w"><div class="chat-message-content allb theme_2">' + val + '</div></div><div class="chat-message-avatar"><img alt="" src="http://via.placeholder.com/128x128"></div></div>');
            $input.val('');
            var $messages_w = $('.chat-content-w');
            $messages_w.scrollTop($messages_w.prop("scrollHeight"));
            $messages_w.perfectScrollbar('update');
        }

        $('.chat-content-w').perfectScrollbar({
            wheelPropagation: true
        });
        var $messages_w = $('.chat-content-w');
        $messages_w.scrollTop($messages_w.prop("scrollHeight"));
        $messages_w.perfectScrollbar('update');

        $('.chat-btn a').on('click', function () {
            add_full_chat_message($('.chat-input input'));
            return false;
        });
        $('.chat-input input').on('keypress', function (e) {
            if (e.which == 13) {
                add_full_chat_message($(this));
                return false;
            }
        });

        $(".change_chat_theme").on('click', function () {
            $(".chat-message-content").removeClass("theme_1 theme_2 theme_3 theme_4").addClass(classes[ count ]);
            if (parseInt(count, 10) === parseInt(length, 10) - 1) {
                count = 0;
            } else {
                count = parseInt(count, 10) + 1;
            }
        });

        $("#chat_box")._placeholder([ 'Type your message here...', 'Press Enter to Send...' ], false);
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