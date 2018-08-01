"use strict";
var handleDataTableButtons = function () {
        "use strict";
        0 !== $("#data-table").length && $("#data-table").DataTable({
            dom       : "Bfrtip",
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
            responsive: !0
        })
    },
    TableManageButtons = function () {
        "use strict";
        return {
            init: function () {
                handleDataTableButtons()
            }
        }
    }();
$(document).ready(function () {
    TableManageButtons.init();
});