var handleLoginPageChangeBackground = function () {
        // WPX Slider - Background image holder
        if ($('.background-image-holder').length) {
            $('.background-image-holder').each(function () {

                var $this = $(this);
                var holderHeight;

                if ($this.data('holder-type') == 'fullscreen') {
                    if ($this.attr('data-holder-offset')) {
                        if ($this.data('holder-offset')) {
                            var offsetHeight = $('body').find($this.data('holder-offset')).height();
                            holderHeight = $(window).height() - offsetHeight;
                        }
                    } else {
                        holderHeight = $(window).height();
                    }
                    if ($(window).width() > 991) {
                        $('.background-image-holder').css({
                            'height': holderHeight + 'px'
                        });
                    } else {
                        $('.background-image-holder').css({
                            'height': 'auto'
                        });
                    }

                }

                $this.imagesLoaded()

                    .done(function (instance) {
                        var elems = $this.find(".animated");

                        elems.each(function () {
                            var $this = $(this);

                            if (!$this.hasClass('animation-ended')) {
                                var animationInType = $this.data('animation-in');
                                var animationOutType = $this.data('animation-out');
                                var animationDelay = $this.data('animation-delay');

                                setTimeout(function () {
                                    $this.addClass('animation-ended ' + animationInType, 100).on(animEndEv, function () {
                                        $this.removeClass(animationInType);
                                    });
                                }, animationDelay);
                            }
                        });
                    })
            })
        }
    },
    LoginV2 = function () {
        "use strict";
        return {
            init: function () {
                handleLoginPageChangeBackground()
            }
        }
    }();
$(document).ready(function () {
    LoginV2.init();
});