"use strict";
var todo = function () {
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
}, scheduleCalendar = function () {
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var dayNames = [ "S", "M", "T", "W", "T", "F", "S" ];

    var now = new Date(),
        month = now.getMonth() + 1,
        year = now.getFullYear();

    var events = [
        [
            '3/' + month + '/' + year,
            'Popover Title',
            '#',
            'rgb(45, 53, 60)',
            'Some contents here'
        ],
        [
            '14/' + month + '/' + year,
            'Tooltip with link',
            'http://www.pvrtechstudio.com/',
            'rgb(45, 53, 60)'
        ],
        [
            '20/' + month + '/' + year,
            'Popover with HTML Content',
            '#',
            'rgb(45, 53, 60)',
            'Some contents here <div class="text-right"><a href="http://www.google.com">Google It</a></div>'
        ],
        [
            '30/' + month + '/' + year,
            'Smrithi Admin',
            'https://codecanyon.net/user/pvr_tech_studio',
            'rgb(45, 53, 60)',
        ]
    ];
    var calendarTarget = $('#schedule-calendar');
    $(calendarTarget).calendar({
        months         : monthNames,
        days           : dayNames,
        events         : events,
        popover_options: {
            placement: 'top',
            html     : true
        }
    });
    $(calendarTarget).find('td.event').each(function () {
        var backgroundColor = $(this).css('background-color');
        $(this).removeAttr('style');
        $(this).find('a').css('background-color', backgroundColor);
    });
    $(calendarTarget).find('.icon-arrow-left, .icon-arrow-right').parent().on('click', function () {
        $(calendarTarget).find('td.event').each(function () {
            var backgroundColor = $(this).css('background-color');
            $(this).removeAttr('style');
            $(this).find('a').css('background-color', backgroundColor);
        });
    });
}, vectorMap = function () {
    "use strict";
    if ($('#world-map').length !== 0) {
        $('#world-map').vectorMap({
            map              : 'world_mill_en',
            scaleColors      : [ '#67676b', '#a7a7ab' ],
            normalizeFunction: 'polynomial',
            hoverOpacity     : 0.5,
            hoverColor       : false,
            zoomOnScroll     : false,
            markerStyle      : {
                initial: {
                    fill  : '#0072ff',
                    stroke: 'transparent',
                    r     : 3
                }
            },
            regionStyle      : {
                initial      : {
                    fill            : '#333',
                    "fill-opacity"  : 1,
                    stroke          : 'none',
                    "stroke-width"  : 0.4,
                    "stroke-opacity": 1
                },
                hover        : {
                    "fill-opacity": 0.8
                },
                selected     : {
                    fill: 'yellow'
                },
                selectedHover: {}
            },
            focusOn          : {
                x    : 0.5,
                y    : 0.5,
                scale: 4
            },
            backgroundColor  : '#222',
            markers          : [
                {latLng: [ 41.90, 12.45 ], name: 'Vatican City'},
                {latLng: [ 43.73, 7.41 ], name: 'Monaco'},
                {latLng: [ -0.52, 166.93 ], name: 'Nauru'},
                {latLng: [ -8.51, 179.21 ], name: 'Tuvalu'},
                {latLng: [ 43.93, 12.46 ], name: 'San Marino'},
                {latLng: [ 47.14, 9.52 ], name: 'Liechtenstein'},
                {latLng: [ 7.11, 171.06 ], name: 'Marshall Islands'},
                {latLng: [ 17.3, -62.73 ], name: 'Saint Kitts and Nevis'},
                {latLng: [ 3.2, 73.22 ], name: 'Maldives'},
                {latLng: [ 35.88, 14.5 ], name: 'Malta'},
                {latLng: [ 12.05, -61.75 ], name: 'Grenada'},
                {latLng: [ 13.16, -61.23 ], name: 'Saint Vincent and the Grenadines'},
                {latLng: [ 13.16, -59.55 ], name: 'Barbados'},
                {latLng: [ 17.11, -61.85 ], name: 'Antigua and Barbuda'},
                {latLng: [ -4.61, 55.45 ], name: 'Seychelles'},
                {latLng: [ 7.35, 134.46 ], name: 'Palau'},
                {latLng: [ 42.5, 1.51 ], name: 'Andorra'},
                {latLng: [ 14.01, -60.98 ], name: 'Saint Lucia'},
                {latLng: [ 6.91, 158.18 ], name: 'Federated States of Micronesia'},
                {latLng: [ 1.3, 103.8 ], name: 'Singapore'},
                {latLng: [ 1.46, 173.03 ], name: 'Kiribati'},
                {latLng: [ -21.13, -175.2 ], name: 'Tonga'},
                {latLng: [ 15.3, -61.38 ], name: 'Dominica'},
                {latLng: [ -20.2, 57.5 ], name: 'Mauritius'},
                {latLng: [ 26.02, 50.55 ], name: 'Bahrain'},
                {latLng: [ 0.33, 6.73 ], name: 'São Tomé and Príncipe'}
            ]
        });
    }
}, chartJsNewUsers = function () {
    if ($("#chartJsNewUsers").length) {
        var ctx = document.getElementById("chartJsNewUsers");
        if (ctx === null) return;
        ctx = ctx.getContext('2d');

        var gradient = ctx.createLinearGradient(0, 20, 20, 270);
        gradient.addColorStop(0, 'rgba(13,169,239,0.6)');
        gradient.addColorStop(1, 'rgba(13,169,239,0.2)');

        var data = {
            labels  : [
                moment("2017-10-21").format("D MMM"),
                moment("2017-10-22").format("D MMM"),
                moment("2017-10-23").format("D MMM"),
                moment("2017-10-24").format("D MMM"),
                moment("2017-10-25").format("D MMM"),
                moment("2017-10-26").format("D MMM"),
                moment("2017-10-27").format("D MMM"),
            ],
            datasets: [
                {
                    label               : 'New Users',
                    lineTension         : 0,
                    data                : [ 32, 51, 44, 87, 125, 140, 173 ],
                    backgroundColor     : gradient,
                    hoverBackgroundColor: gradient,
                    borderColor         : '#0da9ef',
                    borderWidth         : 2,
                    pointRadius         : 4,
                    pointHoverRadius    : 4,
                    pointBackgroundColor: 'rgba(255,255,255,1)'
                }
            ]
        };

        var chart = new Chart(ctx, {
            type      : 'line',
            data      : data,
            responsive: true,
            options   : {
                maintainAspectRatio: true,
                legend             : {
                    display: false,
                },
                scales             : {
                    xAxes: [ {
                        display  : !1,
                        gridLines: {
                            display       : false,
                            drawBorder    : false,
                            tickMarkLength: 20,
                        },
                        ticks    : {
                            fontColor : "#bbb",
                            padding   : 10,
                            fontFamily: 'Roboto',
                        },
                    } ],
                    yAxes: [ {
                        display  : !1,
                        gridLines: {
                            color        : '#eef1f2',
                            drawBorder   : false,
                            zeroLineColor: '#eef1f2',
                        },
                        ticks    : {
                            fontColor : "#bbb",
                            stepSize  : 50,
                            padding   : 20,
                            fontFamily: 'Roboto',
                        }
                    } ]
                },
            },
        });

        $(window).on('resize', function () {
            chart.resize();
        });
    }

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

    if ($("#state_order_chart").length && $("#users_online").length) {
        $("#users_online").sparkline([ 102, 109, 120, 99, 110, 80, 87, 114, 102, 109, 120, 99, 110, 80, 87, 74 ], {
            type      : 'bar',
            height    : '100',
            barWidth  : 9,
            barSpacing: 10,
            barColor  : 'rgba(255,255,255,.3)'
        });

        var ctx = document.getElementById('state_order_chart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels  : [ "BTC", "Ethereum", "Ripple", "Litecoin", "BTC", "Cash" ],
                datasets: [ {
                    label               : "Dollar",
                    backgroundColor     : 'rgba(251,146,140,.15)',
                    borderColor         : '#fb928c',
                    pointBackgroundColor: "#ffffff",
                    data                : [ 120, 200, 170, 200, 150, 170 ]
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
                        display: false
                    } ],
                    yAxes: [ {
                        display  : false,
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
                        //tension: 0.4,
                        borderWidth: 1
                    },
                    point: {
                        radius     : 2,
                        hitRadius  : 10,
                        hoverRadius: 6,
                        borderWidth: 2
                    }
                }
            }
        });
    }
}, jQueryEqualHeight = function () {
    $('.jQueryEqualHeight').jQueryEqualHeight('.card');
    $('.jQueryEqualHeight_chart').jQueryEqualHeight('.card');
    $('.jQueryEqualHeight_chart_1').jQueryEqualHeight('.card');
}, sparkline = function () {
    $('#spark1').sparkline('html', {
        type         : 'bar',
        barWidth     : 8,
        height       : 30,
        barColor     : '#695bd8',
        chartRangeMax: 12
    });

    $('#spark2').sparkline('html', {
        type         : 'bar',
        barWidth     : 8,
        height       : 30,
        barColor     : '#19c4b8',
        chartRangeMax: 12
    });

    $('#spark3').sparkline('html', {
        type         : 'bar',
        barWidth     : 8,
        height       : 30,
        barColor     : '#b24ca8',
        chartRangeMax: 12
    });

    $('#spark4').sparkline('html', {
        type         : 'bar',
        barWidth     : 8,
        height       : 30,
        barColor     : '#fa740f',
        chartRangeMax: 12
    });
}, rickshawGraph = function () {
    var ch1 = new Rickshaw.Graph({
        element : document.querySelector('#ch1'),
        renderer: 'area',
        max     : 80,
        series  : [ {
            data : [
                {x: 0, y: 40},
                {x: 1, y: 49},
                {x: 2, y: 38},
                {x: 3, y: 30},
                {x: 4, y: 32},
                {x: 5, y: 40},
                {x: 6, y: 20},
                {x: 7, y: 10},
                {x: 8, y: 20},
                {x: 9, y: 25},
                {x: 10, y: 35},
                {x: 11, y: 20},
                {x: 12, y: 40}
            ],
            color: 'rgba(255,255,255,0.5)'
        } ]
    });
    ch1.render();

    // Responsive Mode
    new ResizeSensor($('.br-mainpanel'), function () {
        ch1.configure({
            width : $('#ch1').width(),
            height: $('#ch1').height()
        });
        ch1.render();
    });


    var ch2 = new Rickshaw.Graph({
        element : document.querySelector('#ch2'),
        renderer: 'area',
        max     : 80,
        series  : [ {
            data : [
                {x: 0, y: 40},
                {x: 1, y: 15},
                {x: 2, y: 38},
                {x: 3, y: 40},
                {x: 4, y: 32},
                {x: 5, y: 50},
                {x: 6, y: 65},
                {x: 7, y: 70},
                {x: 8, y: 45},
                {x: 9, y: 55},
                {x: 10, y: 60},
                {x: 11, y: 50},
                {x: 12, y: 40}
            ],
            color: 'rgba(255,255,255,0.5)'
        } ]
    });
    ch2.render();

    // Responsive Mode
    new ResizeSensor($('.br-mainpanel'), function () {
        ch2.configure({
            width : $('#ch2').width(),
            height: $('#ch2').height()
        });
        ch2.render();
    });


    var ch3 = new Rickshaw.Graph({
        element : document.querySelector('#ch3'),
        renderer: 'area',
        max     : 80,
        series  : [ {
            data : [
                {x: 0, y: 40},
                {x: 1, y: 45},
                {x: 2, y: 30},
                {x: 3, y: 40},
                {x: 4, y: 50},
                {x: 5, y: 40},
                {x: 6, y: 20},
                {x: 7, y: 10},
                {x: 8, y: 20},
                {x: 9, y: 25},
                {x: 10, y: 35},
                {x: 11, y: 20},
                {x: 12, y: 40}
            ],
            color: 'rgba(255,255,255,0.5)'
        } ]
    });
    ch3.render();

    // Responsive Mode
    new ResizeSensor($('.br-mainpanel'), function () {
        ch3.configure({
            width : $('#ch3').width(),
            height: $('#ch3').height()
        });
        ch3.render();
    });

    var ch4 = new Rickshaw.Graph({
        element : document.querySelector('#ch4'),
        renderer: 'area',
        max     : 80,
        series  : [ {
            data : [
                {x: 0, y: 40},
                {x: 1, y: 45},
                {x: 2, y: 30},
                {x: 3, y: 40},
                {x: 4, y: 50},
                {x: 5, y: 40},
                {x: 6, y: 20},
                {x: 7, y: 10},
                {x: 8, y: 20},
                {x: 9, y: 25},
                {x: 10, y: 35},
                {x: 11, y: 20},
                {x: 12, y: 40}
            ],
            color: 'rgba(255,255,255,0.5)'
        } ]
    });
    ch4.render();

    // Responsive Mode
    new ResizeSensor($('.br-mainpanel'), function () {
        ch4.configure({
            width : $('#ch4').width(),
            height: $('#ch4').height()
        });
        ch4.render();
    });
}, editor = function () {
    if ($('#ckeditorEmail').length) {
        CKEDITOR.config.uiColor = '#ffffff';
        CKEDITOR.config.toolbar = [ [ 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About' ] ];
        CKEDITOR.config.height = 110;
        CKEDITOR.replace('ckeditor1');
    }
}, rickshaw = function () {
    var blue = "#007bff",
        green = "#28a745",
        dark = "#2d353c",
        grey = "#b6c2c9",
        red = "#dc3545";

    var seriesData = [ [], [] ];
    var random = new Rickshaw.Fixtures.RandomData(50);
    for (var i = 0; i < 50; i++) {
        random.addData(seriesData);
    }
    var graph = new Rickshaw.Graph({
        element : document.querySelector("#rs1"),
        height  : 70,
        renderer: 'area',
        series  : [
            {
                data : seriesData[ 0 ],
                color: blue,
                name : 'DB Server'
            }, {
                data : seriesData[ 1 ],
                color: grey,
                name : 'Web Server'
            }
        ]
    });
    var hoverDetail = new Rickshaw.Graph.HoverDetail({
        graph: graph
    });
    random.removeData(seriesData);
    random.addData(seriesData);
    graph.update();
    setInterval(function () {
        random.removeData(seriesData);
        random.addData(seriesData);
        graph.update();
        $("#change_random").text(Math.floor(Math.random() * 100));
        $("#change_random_per").text(Math.floor(Math.random() * 10)+"%");
    }, 1000);
    new ResizeSensor($('#sm-container'), function () {
        graph.configure({
            width : $('#rs1').width(),
            height: $('#rs1').height()
        });
        graph.render();
    });

    /****rs2****/
    var seriesdata = [ [] ];
    var random_1 = new Rickshaw.Fixtures.RandomData(14);
    for (var i = 0; i < 15; i++) {
        random_1.addData(seriesdata);
    }
    var graph_2 = new Rickshaw.Graph({
        element : document.querySelector("#rs2"),
        renderer: 'bar',
        series  : [
            {
                data : seriesdata[ 0 ],
                color: blue,
                name : 'DB Server'
            }
        ]
    });
    var hoverDetail = new Rickshaw.Graph.HoverDetail({
        graph: graph_2
    });
    random_1.removeData(seriesdata);
    random_1.addData(seriesdata);
    graph_2.update();
    setInterval(function () {
        random_1.removeData(seriesdata);
        random_1.addData(seriesdata);
        graph_2.update();
        $("#change_random1").text(Math.floor(Math.random() * 100));
        $("#change_random_per1").text(Math.floor(Math.random() * 10)+"%");
    }, 1000);
    new ResizeSensor($('#sm-container'), function () {
        graph_2.configure({
            width : $('#rs2').width(),
            height: $('#rs2').height()
        });
        graph_2.render();
    });

    var rs3 = new Rickshaw.Graph({
        element : document.querySelector('#rs3'),
        renderer: 'line',
        series  : [ {
            data : [
                {x: 0, y: 5},
                {x: 1, y: 7},
                {x: 2, y: 10},
                {x: 3, y: 11},
                {x: 4, y: 12},
                {x: 5, y: 10},
                {x: 6, y: 9},
                {x: 7, y: 7},
                {x: 8, y: 6},
                {x: 9, y: 8},
                {x: 10, y: 9},
                {x: 11, y: 10},
                {x: 12, y: 7},
                {x: 13, y: 10}
            ],
            color: red
        } ]
    });
    rs3.render();
    // Responsive Mode
    new ResizeSensor($('#sm-container'), function () {
        rs3.configure({
            width : $('#rs3').width(),
            height: $('#rs3').height()
        });
        rs3.render();
    });
};
var icons = function () {
    "use strict";
    return {
        init: function () {
            todo();
            scheduleCalendar();
            vectorMap();
            chartJsNewUsers();
            jQueryEqualHeight();
            sparkline();
            rickshawGraph();
            editor();
            rickshaw();
        }
    }
}();
$(function () {
    icons.init();
});