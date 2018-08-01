var preloader = $("#preloader");
$(preloader).length > 0 && $(window).on("load", function () {
    $(preloader).fadeOut(1e3, function () {
        $(preloader).remove()
    })
});

var _sm_pvrWriteCopyrights = function () {
        "use strict";
        var year = new Date().getFullYear();
        $("#pvrWriteCopyrights").text(year);
    },
    _sm_mainApplication = function () {
        $(window).on('load resize', function () {
            // Swiper
            if ($(".swiper-js-container").length > 0) {
                $('.swiper-js-container').each(function (i, swiperContainer) {

                    var $swiperContainer = $(swiperContainer);
                    var $swiper = $swiperContainer.find('.swiper-container');

                    var swiperEffect = $swiper.data('swiper-effect');

                    var slidesPerViewXs = $swiper.data('swiper-xs-items');
                    var slidesPerViewSm = $swiper.data('swiper-sm-items');
                    var slidesPerViewMd = $swiper.data('swiper-md-items');
                    var slidesPerViewLg = $swiper.data('swiper-items');
                    var spaceBetweenSlidesXs = $swiper.data('swiper-xs-space-between');
                    var spaceBetweenSlidesSm = $swiper.data('swiper-sm-space-between');
                    var spaceBetweenSlidesMd = $swiper.data('swiper-md-space-between');
                    var spaceBetweenSlidesLg = $swiper.data('swiper-space-between');


                    // Slides per view written in data attributes for adaptive resoutions
                    slidesPerViewXs = !slidesPerViewXs ? slidesPerViewLg : slidesPerViewXs;
                    slidesPerViewSm = !slidesPerViewSm ? slidesPerViewLg : slidesPerViewSm;
                    slidesPerViewMd = !slidesPerViewMd ? slidesPerViewLg : slidesPerViewMd;
                    slidesPerViewLg = !slidesPerViewLg ? 1 : slidesPerViewLg;

                    // Space between slides written in data attributes for adaptive resoutions
                    spaceBetweenSlidesXs = !spaceBetweenSlidesXs ? 0 : spaceBetweenSlidesXs;
                    spaceBetweenSlidesSm = !spaceBetweenSlidesSm ? 0 : spaceBetweenSlidesSm;
                    spaceBetweenSlidesMd = !spaceBetweenSlidesMd ? 0 : spaceBetweenSlidesMd;
                    spaceBetweenSlidesLg = !spaceBetweenSlidesLg ? 0 : spaceBetweenSlidesLg;


                    var animEndEv = 'webkitAnimationEnd animationend';

                    var $swiper = new Swiper($swiper, {
                        pagination              : $swiperContainer.find('.swiper-pagination'),
                        nextButton              : $swiperContainer.find('.swiper-button-next'),
                        prevButton              : $swiperContainer.find('.swiper-button-prev'),
                        slidesPerView           : slidesPerViewLg,
                        spaceBetween            : spaceBetweenSlidesLg,
                        autoplay                : $swiper.data('swiper-autoplay'),
                        autoHeight              : $swiper.data('swiper-autoheight'),
                        effect                  : swiperEffect,
                        speed                   : 800,
                        paginationClickable     : true,
                        direction               : 'horizontal',
                        preventClicks           : true,
                        preventClicksPropagation: true,
                        observer                : true,
                        observeParents          : true,
                        breakpoints             : {
                            460 : {
                                slidesPerView     : slidesPerViewXs,
                                spaceBetweenSlides: spaceBetweenSlidesXs
                            },
                            767 : {
                                slidesPerView     : slidesPerViewSm,
                                spaceBetweenSlides: spaceBetweenSlidesSm
                            },
                            991 : {
                                slidesPerView     : slidesPerViewMd,
                                spaceBetweenSlides: spaceBetweenSlidesMd
                            },
                            1100: {
                                slidesPerView     : slidesPerViewLg,
                                spaceBetweenSlides: spaceBetweenSlidesLg
                            }
                        },
                        onInit                  : function (s) {
                            var currentSlide = $(s.slides[ s.activeIndex ]);
                            var elems = currentSlide.find(".animated");
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
                        },
                        onSlideChangeStart      : function (s) {
                            var currentSlide = $(s.slides[ s.activeIndex ]);
                            var elems = currentSlide.find(".animated");
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
                        },
                        onSlideChangeEnd        : function (s) {
                            var previousSlide = $(s.slides[ s.previousIndex ]);
                            var elems = previousSlide.find(".animated");
                            elems.each(function () {
                                var $this = $(this);
                                var animationOneTime = $this.data('animation-onetime');

                                if (!animationOneTime || animationOneTime == false) {
                                    $this.removeClass('animation-ended');
                                }
                            });
                        }
                    });
                });
            }
        });

        $(document).ready(function () {

            // Bootstrap - Submenu event for small resolutions
            $('.dropdown-menu .dropdown-submenu [data-toggle="dropdown"]').on('click', function (e) {
                if (!$(this).next().hasClass('show')) {
                    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                }
                var $subMenu = $(this).next(".dropdown-menu");
                $subMenu.toggleClass('show');
                $subMenu.parent().toggleClass('show');

                $(this).parents('.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                    $('.dropdown-submenu .show').removeClass("show");
                });
                return false;
            });

            // Fix the closing problem when clicking inside dopdown menu
            $('.navbar .dropdown-menu').on('click', function (event) {
                event.stopPropagation();
            });

            // Hamburger
            if ($('.hamburger-js')[ 0 ]) {
                $(".hamburger-js").each(function () {
                    var $this = $(this);

                    $this.on("click", function (e) {
                        $this.toggleClass("is-active");
                        // Do something else, like open/close menu
                    });
                });
            }

            // Footer reveal
            if ($('[data-footer-reveal]').length) {
                $('[data-footer-reveal]').footerReveal({
                    shadow: false,
                    zIndex: -101
                });
            }

            // Input group - plus minus
            $('.btn-number').on("click", function (e) {
                e.preventDefault();

                fieldName = $(this).attr('data-field');
                type = $(this).attr('data-type');
                var input = $("input[name='" + fieldName + "']");
                var currentVal = parseInt(input.val());

                if (!isNaN(currentVal)) {
                    if (type == 'minus') {

                        if (currentVal > input.attr('min')) {
                            input.val(currentVal - 1).change();
                        }
                        if (parseInt(input.val()) == input.attr('min')) {
                            $(this).attr('disabled', true);
                        }

                    } else if (type == 'plus') {

                        if (currentVal < input.attr('max')) {
                            input.val(currentVal + 1).change();
                        }
                        if (parseInt(input.val()) == input.attr('max')) {
                            $(this).attr('disabled', true);
                        }

                    }
                } else {
                    input.val(0);
                }
            });

            $('.input-number').focusin(function () {
                $(this).data('oldValue', $(this).val());
            });

            $('.input-number').change(function () {

                minValue = parseInt($(this).attr('min'));
                maxValue = parseInt($(this).attr('max'));
                valueCurrent = parseInt($(this).val());

                var name = $(this).attr('name');
                if (valueCurrent >= minValue) {
                    $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
                } else {
                    alert('Sorry, the minimum value was reached');
                    $(this).val($(this).data('oldValue'));
                }
                if (valueCurrent <= maxValue) {
                    $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
                } else {
                    alert('Sorry, the maximum value was reached');
                    $(this).val($(this).data('oldValue'));
                }


            });
            $(".input-number").keydown(function (e) {
                // Allow: backspace, delete, tab, escape, enter and .
                if ($.inArray(e.keyCode, [ 46, 8, 9, 27, 13, 190 ]) !== -1 ||
                    // Allow: Ctrl+A
                    (e.keyCode == 65 && e.ctrlKey === true) ||
                    // Allow: home, end, left, right
                    (e.keyCode >= 35 && e.keyCode <= 39)) {
                    // let it happen, don't do anything
                    return;
                }
                // Ensure that it is a number and stop the keypress
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }
            });

            // Textarea autosize
            if ($('.textarea-autogrow')[ 0 ]) {
                autosize($('.textarea-autogrow'));
            }

            // Floating label
            $('.has-floating-label .form-control').on('focus blur', function (e) {
                $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');

            // Bootstrap selected
            $('.selectpicker').each(function (index, element) {
                $('.selectpicker').select2({});
            });

            // Custom file input
            $('.custom-input-file').each(function () {
                var $input = $(this),
                    $label = $input.next('label'),
                    labelVal = $label.html();

                $input.on('change', function (e) {
                    var fileName = '';

                    if (this.files && this.files.length > 1)
                        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                    else if (e.target.value)
                        fileName = e.target.value.split('\\').pop();

                    if (fileName)
                        $label.find('span').html(fileName);
                    else
                        $label.html(labelVal);
                });

                // Firefox bug fix
                $input
                    .on('focus', function () {
                        $input.addClass('has-focus');
                    })
                    .on('blur', function () {
                        $input.removeClass('has-focus');
                    });
            });
            // NoUI Slider
            if ($(".input-slider-container")[ 0 ]) {
                $('.input-slider-container').each(function () {

                    var slider = $(this).find('.input-slider');
                    var sliderId = slider.attr('id');
                    var minValue = slider.data('range-value-min');
                    var maxValue = slider.data('range-value-max');

                    var sliderValue = $(this).find('.range-slider-value');
                    var sliderValueId = sliderValue.attr('id');
                    var startValue = sliderValue.data('range-value-low');

                    var c = document.getElementById(sliderId),
                        d = document.getElementById(sliderValueId);

                    noUiSlider.create(c, {
                        start: [ parseInt(startValue) ],
                        //step: 1000,
                        range: {
                            'min': [ parseInt(minValue) ],
                            'max': [ parseInt(maxValue) ]
                        }
                    });

                    c.noUiSlider.on('update', function (a, b) {
                        //alert(b)
                        d.textContent = a[ b ];
                    });
                })

            }

            if ($("#input-slider-range")[ 0 ]) {
                var c = document.getElementById("input-slider-range"),
                    d = document.getElementById("input-slider-range-value-low"),
                    e = document.getElementById("input-slider-range-value-high"),
                    f = [ d, e ];

                noUiSlider.create(c, {
                    start  : [ parseInt(d.getAttribute('data-range-value-low')), parseInt(e.getAttribute('data-range-value-high')) ],
                    connect: !0,
                    range  : {
                        min: parseInt(c.getAttribute('data-range-value-min')),
                        max: parseInt(c.getAttribute('data-range-value-max'))
                    }
                }), c.noUiSlider.on("update", function (a, b) {
                    f[ b ].textContent = a[ b ]
                })
            }

            // To top
            var offset = 300,
                //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
                offset_opacity = 1200,
                //duration of the top scrolling animation (in ms)
                scroll_top_duration = 500,
                //grab the "back to top" link
                $back_to_top = $('.back-to-top');

            //hide or show the "back to top" link
            $(window).scroll(function () {
                ($(this).scrollTop() > offset) ? $back_to_top.addClass('back-to-top-is-visible') : $back_to_top.removeClass('back-to-top-is-visible cd-fade-out');
                if ($(this).scrollTop() > offset_opacity) {
                    $back_to_top.addClass('back-to-top-fade-out');
                }
            });

            //smooth scroll to top
            $back_to_top.on('click', function (event) {
                event.preventDefault();
                $('body, html').animate({
                    scrollTop: 0,
                }, scroll_top_duration);
            });

            if ($('.countdown').length > 0) {
                $('.countdown').each(function () {
                    var $this = $(this);
                    var date = $this.data('countdown-date');

                    $this.countdown(date).on('update.countdown', function (event) {
                        var $this = $(this).html(event.strftime('' +
                            '<div class="countdown-item"><span class="countdown-digit">%-D</span><span class="countdown-label countdown-days">day%!d</span></div>' +
                            '<div class="countdown-item"><span class="countdown-digit">%H</span><span class="countdown-separator">:</span><span class="countdown-label">hr</span></div>' +
                            '<div class="countdown-item"><span class="countdown-digit">%M</span><span class="countdown-separator">:</span><span class="countdown-label">min</span></div>' +
                            '<div class="countdown-item"><span class="countdown-digit">%S</span><span class="countdown-label">sec</span></div>'
                        ));
                    });
                });
            }

            // Tooltip & Popover
            $('[data-toggle="tooltip"]').tooltip({
                placement: $(this).data('placement'),
                html     : true
            });

            $('[data-toggle="popover"]').popover({
                placement: $(this).data('placement'),
                html     : true
            });

            // Collapse component settings
            $('.accordion--style-1 .collapse, .accordion--style-2 .collapse').on('show.bs.collapse', function () {
                $(this).parent().find(".fa-chevron-right").removeClass("fa-chevron-right").addClass("fa-chevron-down");
            }).on('hide.bs.collapse', function () {
                $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-right");
            });

            //// SHOP functionalities
            // Plus - Minus control
            $('.spinner .btn:first-of-type').on('click', function () {
                $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
            });

            $('.spinner .btn:last-of-type').on('click', function () {
                $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
            });

            // Product actions
            $('.product').on('mouseenter', function () {
                if ($(this).find('.product-actions--a').length > 0 && !$(this).find('.product-actions--a').hasClass('in')) {
                    var $this = $(this).find('.product-actions--a');
                    var animationIn = $this.data('animation-in');

                    $this.addClass('in animated ' + animationIn);
                    $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $this.removeClass('animated ' + animationIn);
                    });
                }
            });

            $('.product').on('mouseleave', function () {
                if ($(this).find('.product-actions--a').length > 0 && $(this).find('.product-actions--a').hasClass('in')) {
                    var $this = $(this).find('.product-actions--a');
                    var animationOut = $this.data('animation-out');

                    $this.addClass('animated ' + animationOut);
                    $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $this.removeClass('in animated ' + animationOut);
                    });
                }
            });

            if ($('#notification_scrollbar').length) {
                var Scrollbar = window.Scrollbar;
                Scrollbar.init(document.querySelector('#notification_scrollbar'));
            }

            $("#notification_scrollbar .dc-actions button").on("click", function () {
                var ele = $(this).closest(".dc-item");
                $(ele).addClass("animated slideOutRight");
                setTimeout(function () {
                    var text = $(".dc-header h3.heading.heading-6");
                    var t = $.trim($(text).text());
                    var count = parseInt(t[ 0 ]);
                    count = count - 1;
                    $(text).text(count + " New Notifications");
                    $(ele).addClass("hide_me");
                }, 1000)
            });

            $("input").attr("autocomplete", "off");

        });
    },
    _sm_pvrCountJS = function () {
        "use strict";
        $("[data-count=true]").each(function () {
            generateCount($(this))
        })
    },
    generateCount = function (e) {
        "use strict";
        if (!$(e).attr("data-init")) {
            var a = $(e).attr("data-number");
            var id = $(e).attr("id");
            var options = {
                useEasing  : true,
                useGrouping: true,
                separator  : ',',
                decimal    : '.',
            };
            var demo = new CountUp(id, 0, parseInt(a, 10), 0, 2.5, options);
            if (!demo.error) {
                demo.start();
            } else {
                console.error(demo.error);
            }
        }
    },
    _sm_pvrTypeitJS = function () {
        "use strict";
        $("[data-typeit=true]").each(function () {
            generateTypeit($(this))
        })
    },
    generateTypeit = function (e) {
        "use strict";
        if ("[data-typeit=true]".length !== 0) {
            var a = $.trim($(e).text());
            var id = $(e).attr("id");
            $('#' + id).typeIt({
                whatToType: a,
                typeSpeed : 100,
                cursor    : true,
            });
        }
    },
    _sm_placeHolder = function () {
        $.fn._placeholder = function (sentences, startOnFocus) {
            var startOnFocus = (typeof(startOnFocus) == "undefined") ? true : startOnFocus;
            var sentences = (typeof(sentences) == "undefined" || sentences == "") ? " " : sentences;
            superplaceholder({
                el       : document.querySelector('#' + $(this)[ 0 ].id),
                sentences: sentences,//$(this).attr("superPlaceholder"),
                options  : {
                    loop         : true,
                    letterDelay  : 100, // milliseconds // delay between letters (in milliseconds)
                    sentenceDelay: 1000, // delay between sentences (in milliseconds)
                    startOnFocus : startOnFocus, //true, // should start on input focus. Set false to autostart
                    shuffle      : false,	// Initially shuffle the passed sentences
                    showCursor   : true, // Show cursor or not. Shows by default
                    cursor       : '|' // String to show as cursor
                }
            })
        };
    },
    _sm_search = function () {
        var openCtrl = document.getElementById('btn-search'),
            closeCtrl = document.getElementById('btn-search-close'),
            searchContainer = document.querySelector('.search'),
            inputSearch = searchContainer.querySelector('.search__input');

        function init() {
            initEvents();
        }

        function initEvents() {
            openCtrl.addEventListener('click', openSearch);
            closeCtrl.addEventListener('click', closeSearch);
            document.addEventListener('keyup', function (ev) {
                // escape key.
                if (ev.keyCode === 27) {
                    closeSearch();
                }
            });
        }

        function openSearch() {
            searchContainer.classList.add('search--open');
            setTimeout(function () {
                inputSearch.focus();
            }, 0)
        }

        function closeSearch() {
            searchContainer.classList.remove('search--open');
            inputSearch.blur();
            inputSearch.value = '';
        }

        init();
    },
    _sm_mlMenu = function () {
        (function () {
            var menuEl = document.getElementById('ml-menu');
            new MLMenu(menuEl, {
                backCtrl: false
            });

            // mobile menu toggle
            var openMenuCtrl = document.querySelector('.action--open'),
                closeMenuCtrl = document.querySelector('.action--close');

            $(closeMenuCtrl).on("click", function () {
                closeMenu()
            });

            function closeMenu() {
                classie.remove(menuEl, 'menu--open');
                openMenuCtrl.focus();
            }
        })();
    },
    _sm_box = function () {
        $(".remove_element").on("click", function (e) {
            e.preventDefault();
            var ele = $(this).closest('[class^="col-"]');
            $(ele).addClass("animated slideOutDown");
            $(ele).find(".fullscreen").removeClass("fullscreen");
            $("body").css("overflow", "auto");
            setTimeout(function () {
                $(ele).remove()
            }, 1000)
        });

        $(".minimize_element").on("click", function (e) {
            e.preventDefault();
            var ele = $(this).closest('.sm-wrapper').find(".sm-box");
            if (!$(ele).hasClass("slideOutDown")) {
                $(ele).removeClass("slideInUp").addClass("animated slideOutDown");
                setTimeout(function () {
                    $(ele).addClass("hide")
                }, 1000)
            } else {
                $(ele).removeClass("hide")
                $(ele).removeClass("slideOutDown").addClass("animated slideInUp")
            }
        });

        $(".refresh_element").on("click", function (e) {
            e.preventDefault();
            var a = $(this).closest(".sm-wrapper").find(".sm-box");
            if (!$(a).hasClass("panel-loading")) {
                var t = $(a);
                $(a).addClass("panel-loading"), $(t).prepend('<div class="panel-loader"><span class="spinner-small"></span></div>'), setTimeout(function () {
                    $(a).removeClass("panel-loading"), $(a).find(".panel-loader").remove()
                }, 3e3)
            }
        });

        $(".fullscreen_element").on("click", function (e) {
            e.preventDefault();
            var a = $(this).closest(".sm-wrapper");
            console.log(a)
            if (!$(a).hasClass("fullscreen")) {
                $("body").css("overflow", "hidden");
                $(a).addClass("fullscreen");
            } else {
                $("body").css("overflow", "auto");
                $(a).removeClass("fullscreen");
            }
        });
    },
    _sm_officeSidebar = function () {
        function o365cs() {
            var bas = $('.o365cs-base');
            if ($(bas).attr('data-ispopup') == 0) {
                $(bas).css("display", "block");
                $(bas).attr('data-ispopup', 1);
                $(".sm-container").addClass("sm-menu-open");
            } else {
                $(bas).css("display", "none");
                $(bas).attr('data-ispopup', 0);
                $(".sm-container").removeClass("sm-menu-open");
            }
        }

        $(function () {
            var bas = $('.o365cs-base');
            $(".o365cs-base .o365cs-nav-closeButton").on("click", function () {
                $(bas).removeClass("slideInT").addClass("slideOutT");
                setTimeout(function () {
                    o365cs();
                }, 500)
            });
            $("#open_ms_menu").on("click", function () {
                $(bas).removeClass("slideOutT").addClass("slideInT");
                o365cs();
            });
        });
    },
    _sm_chat_popup = function () {
        var _container = jQuery(".popup_chat");
        if (_container.length > 0) {
            var count = 0;
            var classes = [ "theme_1", "theme_2", "theme_3", "theme_4" ];
            var length = classes.length;
            $(function () {
//                $('.pvr_chat_cnt').toggleClass('active');

                $('.app_chat_button, .pvr_chat_cnt .chat-close').on('click', function () {
                    $('.pvr_chat_cnt').toggleClass('active');
                    return false;
                });

                $('.message-input').on('keypress', function (e) {
                    if (e.which == 13) {
                        var val = ($(this).val() !== '') ? $(this).val() : "Lorem Ipsum is simply dummy text of the printing.";
                        $('.chat-messages').append('<div class="message self"><div class="message-content">' + val + '</div></div>');
                        $(this).val('');
                        setTimeout(function () {
                            $('.chat-messages').append('<div class="message"><div class="message-content">' + val + '</div></div>');
                            $messages_w.scrollTop($messages_w.prop("scrollHeight"));
                            $messages_w.perfectScrollbar('update');
                        }, 200)
                        var $messages_w = $('.pvr_chat_cnt .chat-messages');
                        $messages_w.scrollTop($messages_w.prop("scrollHeight"));
                        $messages_w.perfectScrollbar('update');
                        return false;
                    }
                });

                $('.pvr_chat_cnt .chat-messages').perfectScrollbar();
                $("#message-input")._placeholder([ 'Type your message here...', 'Press Enter to Send Message...' ], false);

                $(".change_chat_theme").on('click', function () {
                    $(".chat-messages").removeAttr("class").addClass("chat-messages " + classes[ count ]);
                    if (parseInt(count, 10) === parseInt(length, 10) - 1) {
                        count = 0;
                    } else {
                        count = parseInt(count, 10) + 1;
                    }
                    var $messages_w = $('.pvr_chat_cnt .chat-messages');
                    $messages_w.scrollTop($messages_w.prop("scrollHeight"));
                    $messages_w.perfectScrollbar('update');
                })
            });
        }
    },
    _sm_modal_login = function () {
        $("#modal_username")._placeholder([ 'Enter your Email...' ], false);
        $("#modal_password")._placeholder([ 'Type your password here...', 'Press Enter to Login...' ], false);
        $($(".top-menu li:nth-child(1)")[ 0 ], "#launch_login_modal", ".open_login_modal").on("click", function () {
            $('#login_modal').modal('toggle')
        });
    },
    _sm_uiElements = function () {
        var delay = 500;
        $(".progress-bar_dynamic").each(function (i) {
            $(this).delay(delay * i).animate({width: $(this).attr('aria-valuenow') + '%'}, delay);

            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: delay,
                easing  : 'swing',
                step    : function (now) {
                    $(this).text(Math.ceil(now) + '%');
                }
            });
        });
    },
    _sm_SlimScroll = function () {
        "use strict";
        $("[data-scrollbar=true]").each(function () {
            generateSlimScroll($(this))
        })
    },
    generateSlimScroll = function (e) {
        if (!$(e).attr("data-init")) {
            var a = $(e).attr("data-height"),
                t = {
                    height       : a = a || $(e).height(),
                    alwaysVisible: !0
                };
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? ($(e).css("height", a), $(e).css("overflow-x", "scroll")) : $(e).slimScroll(t), $(e).attr("data-init", !0)
        }
    },
    _sm_ShowSwal = function () {
        var _container = jQuery(".sweet_alert");
        if (_container.length > 0) {

            $("#basic_alert").on("click", function () {
                swal("Here's a message!");
            });
            $("#title-and-text").on("click", function () {
                swal("Here's a message!", "It's pretty, isn't it?");
            });
            $("#success-message").on("click", function () {
                swal("Good job!", "You clicked the button!", "success");
            });
            $("#warning-message-and-confirmation").on("click", function () {
                swal({
                    title             : "Are you sure?",
                    text              : "You will not be able to recover this imaginary file!",
                    type              : "warning",
                    showCancelButton  : true,
                    confirmButtonClass: "btn btn-info btn-fill",
                    confirmButtonText : "Yes, delete it!",
                    cancelButtonClass : "btn btn-danger btn-fill",
                    closeOnConfirm    : false,
                }, function () {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                });
            });
            $("#warning-message-and-cancel").on("click", function () {
                swal({
                    title            : "Are you sure?",
                    text             : "You will not be able to recover this imaginary file!",
                    type             : "warning",
                    showCancelButton : true,
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText : "No, cancel plx!",
                    closeOnConfirm   : false,
                    closeOnCancel    : false
                }, function (isConfirm) {
                    if (isConfirm) {
                        swal("Deleted!", "Your imaginary file has been deleted.", "success");
                    } else {
                        swal("Cancelled", "Your imaginary file is safe :)", "error");
                    }
                });
            });
            $("#custom-html").on("click", function () {
                swal({
                    title: 'HTML example',
                    html : 'You can use <b>bold text</b>, ' +
                    '<a href="javascript:void(0)">links</a> ' +
                    'and other HTML tags'
                });
            });
            $("#auto-close").on("click", function () {
                swal({
                    title            : "Auto close alert!",
                    text             : "I will close in 2 seconds.",
                    timer            : 2000,
                    showConfirmButton: false
                });
            });
        }
    },
    _sm_unlimitedTabsRender = function () {
        "use strict";

        function e(e, a) {
            parseInt($(e).css("margin-left"), 10);
            var t = $(e).width(),
                i = $(e).find("li.active").width(),
                n = a > -1 ? a : 150,
                o = 0;
            if ($(e).find("li.active").prevAll().each(function () {
                i += $(this).width()
            }), $(e).find("li").each(function () {
                o += $(this).width()
            }), i >= t) {
                var s = i - t;
                o != i && (s += 40), $(e).find(".nav.nav-tabs").animate({
                    marginLeft: "-" + s + "px"
                }, n)
            }
            i != o && o >= t ? $(e).addClass("overflow-right") : $(e).removeClass("overflow-right"), i >= t && o >= t ? $(e).addClass("overflow-left") : $(e).removeClass("overflow-left")
        }

        function a(e, a) {
            var t = $(e).closest(".tab-overflow"),
                i = parseInt($(t).find(".nav.nav-tabs").css("margin-left"), 10),
                n = $(t).width(),
                o = 0,
                s = 0;
            switch ($(t).find("li").each(function () {
                $(this).hasClass("next-button") || $(this).hasClass("prev-button") || (o += $(this).width())
            }), a) {
                case "next":
                    (l = o + i - n) <= n ? (s = l - i, setTimeout(function () {
                        $(t).removeClass("overflow-right")
                    }, 150)) : s = n - i - 80, 0 != s && $(t).find(".nav.nav-tabs").animate({
                        marginLeft: "-" + s + "px"
                    }, 150, function () {
                        $(t).addClass("overflow-left")
                    });
                    break;
                case "prev":
                    var l = -i;
                    l <= n ? ($(t).removeClass("overflow-left"), s = 0) : s = l - n + 80, $(t).find(".nav.nav-tabs").animate({
                        marginLeft: "-" + s + "px"
                    }, 150, function () {
                        $(t).addClass("overflow-right")
                    })
            }
        }

        function t() {
            $(".tab-overflow").each(function () {
                var a = $(this).width(),
                    t = 0,
                    i = $(this),
                    n = a;
                $(i).find("li").each(function () {
                    var e = $(this);
                    t += $(e).width(), $(e).hasClass("active") && t > a && (n -= t)
                }), e(this, 0)
            });
        }

        $(".tab-overflow li").on("click", function (e) {
            $(this).closest(".tab-overflow").find("li").removeClass("active");
            $(this).addClass("active");
        });

        $('[data-click="next-tab"]').on("click", function (e) {
            e.preventDefault(), a(this, "next")
        }), $('[data-click="prev-tab"]').on("click", function (e) {
            e.preventDefault(), a(this, "prev")
        }), $(window).on("resize", function () {
            $(".tab-overflow .nav.nav-tabs").removeAttr("style"), t()
        }), t()
    },
    _sm_draggablePanel = function () {
        "use strict";
        var e = $(".sm-header:not('.nodrag')").closest("[class*=col]");
        $(e).sortable({
            handle     : ".sm-header",
            connectWith: "#main_content .sm-content .row > [class*=col]",
            /*update     : function (event, ui) {
                $(event.target).append($(ui.item[ 0 ]).next()[ 0 ]);
                $($(ui.item[ 0 ]).next()[ 0 ]).remove();
            },*/
            stop       : function (e, a) {
                console.log(a.item)
                a.item.find(".sm-header").append('<i class="fa ion-android-sync fa-spin m-l-5" data-id="title-spinner"></i>');
                handleSavePanelPosition(a.item)
            }
        })
    },
    handleSavePanelPosition = function (e) {
        "use strict";
        if (0 !== $(".ui-sortable").length) {
            var a = [],
                t = 0;
            $.when($(".ui-sortable").each(function () {
                var e = $(this).find("[data-sortable-id]");
                if (0 !== e.length) {
                    var i = [];
                    $(e).each(function () {
                        var e = $(this).attr("data-sortable-id");
                        i.push({
                            id: e
                        })
                    }), a.push(i)
                } else a.push([]);
                t++
            })).done(function () {
                var t = window.location.href;
                t = (t = t.split("?"))[ 0 ], localStorage.setItem(t, JSON.stringify(a)), $(e).find('[data-id="title-spinner"]').delay(500).fadeOut(500, function () {
                    $(this).remove()
                })
            })
        }
    },
    _sm_localStorage = function () {
        "use strict";
        if ("undefined" != typeof Storage && "undefined" != typeof localStorage) {
            var e = window.location.href;
            e = (e = e.split("?"))[ 0 ];
            var a = localStorage.getItem(e);
            if (a) {
                a = JSON.parse(a);
                var t = 0;
                $.when($(".sm-header").closest('[class*="col-"]').each(function () {
                    var e = a[ t ],
                        i = $(this);
                    e && $.each(e, function (e, a) {
                        var t = $('[data-sortable-id="' + a.id + '"]').not('[data-init="true"]');
                        if (0 !== $(t).length) {
                            var n = $(t).clone();
                            $(t).remove(), $(i).append(n), $('[data-sortable-id="' + a.id + '"]').attr("data-init", "true")
                        }
                    }), t++
                })).done(function () {
                    window.dispatchEvent(new CustomEvent("localstorage-position-loaded"))
                })
            }
        } else alert("Your browser is not supported with the local storage")
    },
    App = function () {
        "use strict";
        return {
            init               : function () {
                this.initComponent();
            },
            BeforeDocumentReady: function () {
                _sm_pvrWriteCopyrights()
            },
            initComponent      : function () {
                _sm_pvrWriteCopyrights();
                _sm_localStorage();
                _sm_mainApplication();
                _sm_pvrCountJS();
                _sm_pvrTypeitJS();
                _sm_placeHolder();
                if ($('.search__input').length) {
                    _sm_search();
                }
                if ($('.menu__level').length) {
                    _sm_mlMenu();
                }
                _sm_officeSidebar();
                _sm_chat_popup();
                if ($('#modal_username').length) {
                    _sm_modal_login();
                }
                _sm_uiElements();
                _sm_SlimScroll();
                _sm_ShowSwal();
                _sm_draggablePanel();
                _sm_unlimitedTabsRender();
                _sm_box();
            }
        }
    }();
App.BeforeDocumentReady();
$(function () {
    App.init();
});