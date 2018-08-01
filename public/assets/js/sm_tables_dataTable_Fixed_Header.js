"use strict";
var handleDataTableFixedHeader = function () {
        "use strict";
        0 !== $("#data-table").length && $("#data-table").DataTable({
            lengthMenu : [ 40, 60, 80 ],
            fixedHeader: {
                header      : !0,
                //headerOffset: $('.header').height()
            },
            responsive : !0
        })
    },
    TableManageFixedHeader = function () {
        "use strict";
        return {
            init: function () {
                handleDataTableFixedHeader()
            }
        }
    }();
$(document).ready(function () {
    TableManageFixedHeader.init();
});