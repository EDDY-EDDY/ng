"use strict";
var material_icons = function () {
    "use strict";
    if ($("#sales_chart").length) {
        var ctx = document.getElementById('sales_chart').getContext('2d');
        var myBarChart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels  : [ "Bitcoin", "Ethereum", "Ripple", "BTC Cash", "Litecoin" ],
                datasets: [ {
                    label               : "Bitcoin",
                    data                : [ 40, 90, 210, 160, 230 ],
                    backgroundColor     : '#ffa534',
                    borderColor         : '#ffa534',
                    pointBorderColor    : '#ffffff',
                    pointBackgroundColor: '#ffa534',
                    pointBorderWidth    : 2,
                    pointRadius         : 4

                }, {
                    label               : "My Second dataset",
                    data                : [ 160, 140, 20, 270, 110 ],
                    backgroundColor     : '#3d74f1',
                    borderColor         : '#3d74f1',
                    pointBorderColor    : '#ffffff',
                    pointBackgroundColor: '#3d74f1',
                    pointBorderWidth    : 2,
                    pointRadius         : 4
                } ]
            },

            // Configuration options go here
            options: {
                maintainAspectRatio: false,
                legend             : {
                    display: false
                },

                scales  : {
                    xAxes: [ {
                        display  : true,
                        gridLines: {
                            zeroLineColor     : '#e7ecf0',
                            color             : '#e7ecf0',
                            borderDash        : [ 5, 5, 5 ],
                            zeroLineBorderDash: [ 5, 5, 5 ],
                            drawBorder        : false
                        }
                    } ],
                    yAxes: [ {
                        display  : true,
                        gridLines: {
                            zeroLineColor     : '#e7ecf0',
                            color             : '#e7ecf0',
                            borderDash        : [ 5, 5, 5 ],
                            zeroLineBorderDash: [ 5, 5, 5 ],
                            drawBorder        : false
                        }
                    } ]

                },
                elements: {
                    line : {
                        tension    : 0.00001,
//              tension: 0.4,
                        borderWidth: 1
                    },
                    point: {
                        radius     : 2,
                        hitRadius  : 10,
                        hoverRadius: 6,
                        borderWidth: 4
                    }
                }
            }
        });
    }

    $("#users_online").sparkline([ 102, 109, 120, 99, 110, 80, 87, 114, 102, 109, 120, 99, 110, 80, 87, 74 ], {
        type      : 'bar',
        height    : '130',
        barWidth  : 9,
        barSpacing: 10,
        barColor  : 'rgba(255,255,255,.3)'
    });

    $("#users_onliner").sparkline([ 102, 109, 120, 99, 110, 80, 87, 114, 102, 109, 120, 99, 110, 80, 87, 74 ], {
        type      : 'bar',
        height    : '130',
        barWidth  : 9,
        barSpacing: 10,
        barColor  : 'rgba(255,255,255,.3)'
    });
}, todo = function () {
    "use strict";
    $(function () {
        $("#sortable1, #sortable2").sortable({
            handle     : '.handle',
            connectWith: ".todo",
            update     : countTasks
        }).disableSelection();
    });

    $('.todo .checkbox > input[type="checkbox"]').on("click", function () {
        var $this = $(this).parent().parent().parent();

        if ($(this).prop('checked')) {
            $this.addClass("complete");

            $(this).parent().hide();

            $this.slideUp(500, function () {
                $this.clone().prependTo("#sortable3").effect("highlight", {}, 800);
                $this.remove();
                countTasks();
            });
        } else {
            // insert undo code here...
        }
    });

    function countTasks() {
        $('.todo-group-title').each(function () {
            var $this = $(this);
            $this.find(".num-of-tasks").text($this.next().find("li").size());
        });
    }
}
var icons = function () {
    "use strict";
    return {
        init: function () {
            material_icons();
            todo()
        }
    }
}();
$(function () {
    icons.init();
});