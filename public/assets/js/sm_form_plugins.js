"use strict";
var datePicker = function () {
    "use strict";
    $('#datepicker-default').datepicker({
        todayHighlight: true
    });
    $('#datepicker-component').datepicker({
        todayHighlight: true
    });
    $('#datepicker-inline').datepicker({
        todayHighlight: true
    });
    $('.input-daterange').datepicker({
        todayHighlight: true
    });
    $('#datepicker-disabled-past').datepicker({
        todayHighlight: true
    });
    $('#datepicker-autoClose').datepicker({
        todayHighlight: true,
        autoclose     : true
    });
}, dateTimePicker = function () {
    $(".date_time_pick").on("click", function () {
        $(this).prev().trigger("focus")
    });
    $('#date-time-picker-default').datetimepicker({
        fontAwesome: true
    });
    $('#date-time-picker-component').datetimepicker({
        fontAwesome: true
    });
    $("#date-time-picker-autoclose").datetimepicker({
        fontAwesome: true,
        format     : "dd MM yyyy - hh:ii",
        linkField  : "mirror_field",
        linkFormat : "yyyy-mm-dd hh:ii",
        autoclose  : true
    });
    $("#date-time-picker-meridian").datetimepicker({
        format      : "dd MM yyyy - HH:ii P",
        showMeridian: true,
        autoclose   : true,
        todayBtn    : true,
        fontAwesome : true,
    });
    $("#date-time-picker-timeonly").datetimepicker({
        fontAwesome : true,
        format      : "HH:ii P",
        showMeridian: true,
        autoclose   : true,
        startView   : 1
    });
    $("#date-time-picker-inline").datetimepicker({
        fontAwesome : true,
        format      : "HH:ii P",
        showMeridian: true,
        autoclose   : true,
        startView   : 1
    });
}, simpleColorpicker = function () {
    $('#colorpicker').colorpicker({
        format: 'hex'
    });
    $('#colorpicker-prepend').colorpicker({
        format: 'hex'
    });
    $('#colorpicker-rgba').colorpicker({
        format: "rgba"
    });
    $('#colorpicker-horizontal').colorpicker({
        horizontal: true
    });

    $('#colorpicker-disablealpha').colorpicker({
        useAlpha: false
    });

    $('#colorpicker-disablehex').colorpicker({
        useHashPrefix: false
    });
}, dateRangePicker = function () {
    $('#default-daterange').daterangepicker({
            opens    : 'right',
            format   : 'MM/DD/YYYY',
            separator: ' to ',
            startDate: moment().subtract('days', 29),
            endDate  : moment(),
            minDate  : '01/01/2012',
            maxDate  : '12/31/2018',
        },
        function (start, end) {
            $('#default-daterange input').val(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        });

    $('#advance-daterange span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

    $('#advance-daterange').daterangepicker({
        format             : 'MM/DD/YYYY',
        startDate          : moment().subtract(29, 'days'),
        endDate            : moment(),
        minDate            : '01/01/2018',
        maxDate            : '12/31/2030',
        dateLimit          : {days: 60},
        showDropdowns      : true,
        showWeekNumbers    : true,
        timePicker         : false,
        timePickerIncrement: 1,
        timePicker12Hour   : true,
        ranges             : {
            'Today'       : [ moment(), moment() ],
            'Yesterday'   : [ moment().subtract(1, 'days'), moment().subtract(1, 'days') ],
            'Last 7 Days' : [ moment().subtract(6, 'days'), moment() ],
            'Last 30 Days': [ moment().subtract(29, 'days'), moment() ],
            'This Month'  : [ moment().startOf('month'), moment().endOf('month') ],
            'Last Month'  : [ moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month') ]
        },
        opens              : 'right',
        drops              : 'down',
        buttonClasses      : [ 'btn', 'btn-sm' ],
        applyClass         : 'btn-primary',
        cancelClass        : 'btn-default',
        separator          : ' to ',
        locale             : {
            applyLabel      : 'Submit',
            cancelLabel     : 'Cancel',
            fromLabel       : 'From',
            toLabel         : 'To',
            customRangeLabel: 'Custom',
            daysOfWeek      : [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ],
            monthNames      : [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
            firstDay        : 1
        }
    }, function (start, end, label) {
        $('#advance-daterange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });
}, jqueryAutocomplete = function () {
    var availableTags = [
        'ActionScript',
        'AppleScript',
        'Asp',
        'BASIC',
        'C',
        'C++',
        'Clojure',
        'COBOL',
        'ColdFusion',
        'Erlang',
        'Fortran',
        'Groovy',
        'Haskell',
        'Java',
        'JavaScript',
        'Lisp',
        'Perl',
        'PHP',
        'Python',
        'Ruby',
        'Scala',
        'Scheme'
    ];
    $('#jquery-autocomplete').autocomplete({
        source: availableTags
    });
}, maskedInput = function () {
    "use strict";
    $("#masked-input-date").mask("99/99/9999");
    $("#masked-input-time").mask("99:99:99");
    $("#masked-input-datetime").mask("99/99/9999 99:99:99");
    $("#masked-input-phone").mask("(999) 999-9999");
    $("#masked-input-tid").mask("99-9999999");
    $("#masked-input-ssn").mask("999-99-9999");
    $("#masked-input-pno").mask("aaa-9999-a");
    $("#masked-input-pkey").mask("a*-999-a999");
    $("#masked-input-card").mask("9999-9999-9999-9999");
    $("#masked-input-ip").mask("999.999.999.999");
}, clipboard = function () {
    var clipboard = new Clipboard('.btn');

    clipboard.on('success', function (e) {
        $(e.trigger).tooltip({
            title    : 'Copied',
            placement: 'top'
        });
        $(e.trigger).tooltip('show');
        setTimeout(function () {
            $(e.trigger).tooltip('dispose');
        }, 500);
    });
}, ionRangeSlider = function () {
    $('#default_rangeSlider').ionRangeSlider({
        min       : 0,
        max       : 2845,
        type      : 'double',
        prefix    : "$",
        maxPostfix: "+",
        prettify  : false,
        hasGrid   : true
    });
    $('#customRange_rangeSlider').ionRangeSlider({
        min    : 1000,
        max    : 100000,
        from   : 45800,
        to     : 89546,
        type   : 'double',
        step   : 500,
        postfix: " $",
        hasGrid: true
    });
    $('#customValue_rangeSlider').ionRangeSlider({
        values : [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'
        ],
        type   : 'single',
        hasGrid: true
    });
}, passwordIndicator = function () {
    "use strict";
    $('#password-indicator-default').passwordStrength();
    $('#password-indicator-visible').passwordStrength({targetDiv: '#passwordStrengthDiv2'});
}, jqueryTagIt = function () {
    var availabletags = [
        'ActionScript',
        'AppleScript',
        'Asp',
        'BASIC',
        'C',
        'C++',
        'Clojure',
        'COBOL',
        'ColdFusion',
        'Erlang',
        'Fortran',
        'Groovy',
        'Haskell',
        'Java',
        'JavaScript',
        'Lisp',
        'Perl',
        'PHP',
        'Python',
        'Ruby',
        'Scala',
        'Scheme'
    ];
    $('#jquery-tagIt-default').tagit({
        availableTags: availabletags
    });
    $('#jquery-tagIt-inverse').tagit({
        availableTags: availabletags
    });
    $('#jquery-tagIt-white').tagit({
        availableTags: availabletags
    });
    $('#jquery-tagIt-primary').tagit({
        availableTags: availabletags
    });
    $('#jquery-tagIt-info').tagit({
        availableTags: availabletags
    });
    $('#jquery-tagIt-success').tagit({
        availableTags: availabletags
    });
    $('#jquery-tagIt-warning').tagit({
        availableTags: availabletags
    });
    $('#jquery-tagIt-danger').tagit({
        availableTags: availabletags
    });
}, spin = function () {
    "use strict";
    $("input[name='demo1']").TouchSpin({
        min             : 0,
        max             : 100,
        step            : 0.1,
        decimals        : 2,
        boostat         : 5,
        maxboostedstep  : 10,
        postfix         : '%',
        buttondown_class: "btn btn-inverse",
        buttonup_class  : "btn btn-inverse"
    });

    $("input[name='demo2']").TouchSpin({
        min             : -1000000000,
        max             : 1000000000,
        stepinterval    : 50,
        maxboostedstep  : 10000000,
        prefix          : '$',
        buttondown_class: "btn btn-inverse",
        buttonup_class  : "btn btn-inverse"
    });

    $("input[name='demo3']").TouchSpin({
        buttondown_class: "btn btn-inverse",
        buttonup_class  : "btn btn-inverse"
    });

    $("input[name='demo3_21']").TouchSpin({
        initval         : 40,
        buttondown_class: "btn btn-inverse",
        buttonup_class  : "btn btn-inverse"
    });

    $("input[name='demo4']").TouchSpin({
        postfix           : "a button",
        postfix_extraclass: "btn btn-purple m-b-0",
        buttondown_class  : "btn btn-inverse",
        buttonup_class    : "btn btn-inverse"
    });

    $("input[name='demo5']").TouchSpin({
        prefix          : "pre",
        postfix         : "post",
        buttondown_class: "btn btn-inverse",
        buttonup_class  : "btn btn-inverse"
    });

    $("input[name='demo6']").TouchSpin({
        buttondown_class: "btn btn-primary",
        buttonup_class  : "btn btn-primary"
    });
}, session = function () {
    var now = new Date(),
        hourDeg = now.getHours() / 12 * 360 + now.getMinutes() / 60 * 30,
        minuteDeg = now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6,
        secondDeg = now.getSeconds() / 60 * 360,
        stylesDeg = [
            "@-webkit-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
            "@-webkit-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
            "@-webkit-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}",
            "@-moz-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
            "@-moz-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
            "@-moz-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}"
        ].join("");
    document.getElementById("clock-animations").innerHTML = stylesDeg;

    $("#activate_session").on("click", function () {
        $.sessionTimeout({
            title             : "Session Timeout Notification",
            message           : "Your session is about to expire.",
            //keepAliveUrl      : "../demo/timeout-keep-alive.php",
            redirUrl          : "index.html",
            logoutUrl         : "index.html",
            warnAfter         : 10,
            redirAfter        : 15e3,
            ignoreUserActivity: !0,
            countdownMessage  : "Redirecting in {timer} seconds.",
            countdownBar      : !0
        });
    });
}, list = function () {
    "use strict";
    var demo1 = $('select[name="duallistbox_demo1[]"]').bootstrapDualListbox();
    $("#demoform").submit(function () {
        alert($('[name="duallistbox_demo1[]"]').val());
        return false;
    });
}, toast = function () {
    $("[data-toast]").on("click", function () {
        var b = $(this), c = b.data("toast-type"), d = b.data("toast-icon"), e = b.data("toast-position"),
            f = b.data("toast-title"), g = b.data("toast-message"), h = "";
        switch (e) {
            case"topRight":
                h = {
                    class              : "iziToast-" + c || "",
                    title              : f || "Title",
                    message            : g || "toast message",
                    animateInside      : !1,
                    position           : "topRight",
                    progressBar        : !1,
                    icon               : d,
                    timeout            : 3200,
                    transitionIn       : "fadeInLeft",
                    transitionOut      : "fadeOut",
                    transitionInMobile : "fadeIn",
                    transitionOutMobile: "fadeOut"
                };
                break;
            case"bottomRight":
                h = {
                    class              : "iziToast-" + c || "",
                    title              : f || "Title",
                    message            : g || "toast message",
                    animateInside      : !1,
                    position           : "bottomRight",
                    progressBar        : !1,
                    icon               : d,
                    timeout            : 3200,
                    transitionIn       : "fadeInLeft",
                    transitionOut      : "fadeOut",
                    transitionInMobile : "fadeIn",
                    transitionOutMobile: "fadeOut"
                };
                break;
            case"topLeft":
                h = {
                    class              : "iziToast-" + c || "",
                    title              : f || "Title",
                    message            : g || "toast message",
                    animateInside      : !1,
                    position           : "topLeft",
                    progressBar        : !1,
                    icon               : d,
                    timeout            : 3200,
                    transitionIn       : "fadeInRight",
                    transitionOut      : "fadeOut",
                    transitionInMobile : "fadeIn",
                    transitionOutMobile: "fadeOut"
                };
                break;
            case"bottomLeft":
                h = {
                    class              : "iziToast-" + c || "",
                    title              : f || "Title",
                    message            : g || "toast message",
                    animateInside      : !1,
                    position           : "bottomLeft",
                    progressBar        : !1,
                    icon               : d,
                    timeout            : 3200,
                    transitionIn       : "fadeInRight",
                    transitionOut      : "fadeOut",
                    transitionInMobile : "fadeIn",
                    transitionOutMobile: "fadeOut"
                };
                break;
            case"topCenter":
                h = {
                    class              : "iziToast-" + c || "",
                    title              : f || "Title",
                    message            : g || "toast message",
                    animateInside      : !1,
                    position           : "topCenter",
                    progressBar        : !1,
                    icon               : d,
                    timeout            : 3200,
                    transitionIn       : "fadeInDown",
                    transitionOut      : "fadeOut",
                    transitionInMobile : "fadeIn",
                    transitionOutMobile: "fadeOut"
                };
                break;
            case"bottomCenter":
                h = {
                    class              : "iziToast-" + c || "",
                    title              : f || "Title",
                    message            : g || "toast message",
                    animateInside      : !1,
                    position           : "bottomCenter",
                    progressBar        : !1,
                    icon               : d,
                    timeout            : 3200,
                    transitionIn       : "fadeInUp",
                    transitionOut      : "fadeOut",
                    transitionInMobile : "fadeIn",
                    transitionOutMobile: "fadeOut"
                };
                break;
            default:
                h = {
                    class              : "iziToast-" + c || "",
                    title              : f || "Title",
                    message            : g || "toast message",
                    animateInside      : !1,
                    position           : "topRight",
                    progressBar        : !1,
                    icon               : d,
                    timeout            : 3200,
                    transitionIn       : "fadeInLeft",
                    transitionOut      : "fadeOut",
                    transitionInMobile : "fadeIn",
                    transitionOutMobile: "fadeOut"
                }
        }
        iziToast.show(h)
    });
}, showSwal = function () {
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
}, editable = function () {
    $.mockjaxSettings.responseTime = 500;
    $.mockjax({
        url: "/post", response: function (e) {

        }
    });
    $.mockjax({
        url: "/groups", response: function (e) {
            this.responseText = [ {value: 0, text: "Guest"}, {value: 1, text: "Service"}, {
                value: 2,
                text : "Customer"
            }, {value: 3, text: "Operator"}, {value: 4, text: "Support"}, {value: 5, text: "Admin"} ];

        }
    });
    $.mockjax({
        url: "/status", status: 500, response: function (e) {
            this.responseText = "Internal Server Error";

        }
    });
    $.fn.editable.defaults.mode = "popup";
    $.fn.editable.defaults.inputclass = "form-control form-control-sm";
    $.fn.editable.defaults.url = "/post";
    $("#username").editable();
    $("#firstname").editable({
        validate: function (e) {
            if ($.trim(e) === "") {
                return "This field is required"
            }
        }
    });
    $("#sex").editable({
        prepend: "not selected",
        source : [ {value: 1, text: "Male"}, {value: 2, text: "Female"} ],
        display: function (e, t) {
            var n = {"": "", 1: '<i class="fa fa-male m-r-5"></i>', 2: '<i class="fa fa-female m-r-5"></i>'},
                r = $.grep(t, function (t) {
                    return t.value == e
                });
            if (r.length) {
                $(this).text(r[ 0 ].text).prepend(n[ e ])
            } else {
                $(this).empty()
            }
        }
    });
    $("#group").editable({showbuttons: false});
    $("#status").editable();
    $("#vacation").editable({datepicker: {todayBtn: "linked"}});
    $("#meeting_start").editable({
        format        : "yyyy-mm-dd hh:ii",
        viewformat    : "dd/mm/yyyy hh:ii",
        validate      : function (e) {
            if (e && e.getDate() == 10) return "Day cant be 10!"
        },
        datetimepicker: {
            todayBtn    : "linked", weekStart: 1, fontAwesome: true,
            format      : "HH:ii P",
            showMeridian: true,
            autoclose   : true,
            startView   : 1
        }
    });
    $("#comments").editable({showbuttons: "bottom"});
    $("#fruits").editable({
        pk    : 1,
        limit : 3,
        source: [ {value: 1, text: "banana"}, {value: 2, text: "peach"}, {
            value: 3,
            text : "apple"
        }, {value: 4, text: "watermelon"}, {value: 5, text: "orange"} ]
    });

    $("#address").editable({
        showbuttons: "bottom",
        url       : "/post",
        value     : {city: "Moscow", street: "Lenina", building: "12"},
        validate  : function (e) {
            if (e.city === "") return "city is required!"
        },
        display   : function (e) {
            if (!e) {
                $(this).empty();
                return
            }
            var t = "<b>" + $("<div>").text(e.city).html() + "</b>, " + $("<div>").text(e.street).html() + " st., bld. " + $("<div>").text(e.building).html();
            $(this).html(t)
        }
    });
};
var FormPlugins = function () {
    "use strict";
    return {
        init: function () {
            datePicker();
            dateTimePicker();
            simpleColorpicker();
            dateRangePicker();
            jqueryAutocomplete();
            maskedInput();
            clipboard();
            ionRangeSlider();
            passwordIndicator();
            jqueryTagIt();
            spin();
            session();
            list();
            toast();
            showSwal();
            editable();
        }
    }
}();
$(function () {
    FormPlugins.init();
});