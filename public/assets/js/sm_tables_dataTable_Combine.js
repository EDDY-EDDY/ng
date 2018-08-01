"use strict";
var handleDataTableCombinationSetting = function () {
        "use strict";
        0 !== $("#data-table").length && $("#data-table").DataTable({
            dom       : "lBfrtip",
            buttons   : [ {
                extend   : "copy",
                className: "btn-sm btn-primary"
            }, {
                extend   : "csv",
                className: "btn-sm btn-primary"
            }, {
                extend   : "excel",
                className: "btn-sm btn-primary"
            }, {
                extend   : "pdf",
                className: "btn-sm btn-primary"
            }, {
                extend   : "print",
                className: "btn-sm btn-primary"
            } ],
            responsive: !0,
            autoFill  : !0,
            colReorder: !0,
            keys      : !0,
            rowReorder: !0,
            select    : !0
        })
    },
    TableManageCombine = function () {
        "use strict";
        return {
            init: function () {
                handleDataTableCombinationSetting()
            }
        }
    }();
$(document).ready(function () {
    TableManageCombine.init();
});