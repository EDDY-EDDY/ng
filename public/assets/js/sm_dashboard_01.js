"use strict";
var visitorsAreaChart = function () {
    var handleGetDate = function (minusDate) {
        var d = new Date();
        d = d.setDate(d.getDate() - minusDate);
        return d;
    };

    var visitorAreaChartData = [ {
        'key'   : 'Unique Visitors',
        'color' : '#5AC8FA',
        'values': [
            [ handleGetDate(77), 13 ], [ handleGetDate(76), 13 ], [ handleGetDate(75), 6 ],
            [ handleGetDate(73), 6 ], [ handleGetDate(72), 6 ], [ handleGetDate(71), 5 ], [ handleGetDate(70), 5 ],
            [ handleGetDate(69), 5 ], [ handleGetDate(68), 6 ], [ handleGetDate(67), 7 ], [ handleGetDate(66), 6 ],
            [ handleGetDate(65), 9 ], [ handleGetDate(64), 9 ], [ handleGetDate(63), 8 ], [ handleGetDate(62), 10 ],
            [ handleGetDate(61), 10 ], [ handleGetDate(60), 10 ], [ handleGetDate(59), 10 ], [ handleGetDate(58), 9 ],
            [ handleGetDate(57), 9 ], [ handleGetDate(56), 10 ], [ handleGetDate(55), 9 ], [ handleGetDate(54), 9 ],
            [ handleGetDate(53), 8 ], [ handleGetDate(52), 8 ], [ handleGetDate(51), 8 ], [ handleGetDate(50), 8 ],
            [ handleGetDate(49), 8 ], [ handleGetDate(48), 7 ], [ handleGetDate(47), 7 ], [ handleGetDate(46), 6 ],
            [ handleGetDate(45), 6 ], [ handleGetDate(44), 6 ], [ handleGetDate(43), 6 ], [ handleGetDate(42), 5 ],
            [ handleGetDate(41), 5 ], [ handleGetDate(40), 4 ], [ handleGetDate(39), 4 ], [ handleGetDate(38), 5 ],
            [ handleGetDate(37), 5 ], [ handleGetDate(36), 5 ], [ handleGetDate(35), 7 ], [ handleGetDate(34), 7 ],
            [ handleGetDate(33), 7 ], [ handleGetDate(32), 10 ], [ handleGetDate(31), 9 ], [ handleGetDate(30), 9 ],
            [ handleGetDate(29), 10 ], [ handleGetDate(28), 11 ], [ handleGetDate(27), 11 ], [ handleGetDate(26), 8 ],
            [ handleGetDate(25), 8 ], [ handleGetDate(24), 7 ], [ handleGetDate(23), 8 ], [ handleGetDate(22), 9 ],
            [ handleGetDate(21), 8 ], [ handleGetDate(20), 9 ], [ handleGetDate(19), 10 ], [ handleGetDate(18), 9 ],
            [ handleGetDate(17), 10 ], [ handleGetDate(16), 16 ], [ handleGetDate(15), 17 ], [ handleGetDate(14), 16 ],
            [ handleGetDate(13), 17 ], [ handleGetDate(12), 16 ], [ handleGetDate(11), 15 ], [ handleGetDate(10), 14 ],
            [ handleGetDate(9), 24 ], [ handleGetDate(8), 18 ], [ handleGetDate(7), 15 ], [ handleGetDate(6), 14 ],
            [ handleGetDate(5), 16 ], [ handleGetDate(4), 16 ], [ handleGetDate(3), 17 ], [ handleGetDate(2), 7 ],
            [ handleGetDate(1), 7 ], [ handleGetDate(0), 7 ]
        ]
    },{
        'key'   : 'Visitors',
        'color' : '#d289fa',
        'values': [
            [ handleGetDate(77), 13 ], [ handleGetDate(76), 13 ], [ handleGetDate(75), 6 ],
            [ handleGetDate(73), 6 ], [ handleGetDate(72), 6 ], [ handleGetDate(71), 5 ], [ handleGetDate(70), 5 ],
            [ handleGetDate(69), 5 ], [ handleGetDate(68), 6 ], [ handleGetDate(67), 7 ], [ handleGetDate(66), 6 ],
            [ handleGetDate(65), 9 ], [ handleGetDate(64), 9 ], [ handleGetDate(63), 8 ], [ handleGetDate(62), 10 ],
            [ handleGetDate(61), 10 ], [ handleGetDate(60), 10 ], [ handleGetDate(59), 10 ], [ handleGetDate(58), 9 ],
            [ handleGetDate(57), 9 ], [ handleGetDate(56), 10 ], [ handleGetDate(55), 9 ], [ handleGetDate(54), 9 ],
            [ handleGetDate(53), 8 ], [ handleGetDate(52), 8 ], [ handleGetDate(51), 8 ], [ handleGetDate(50), 8 ],
            [ handleGetDate(49), 8 ], [ handleGetDate(48), 7 ], [ handleGetDate(47), 7 ], [ handleGetDate(46), 6 ],
            [ handleGetDate(45), 6 ], [ handleGetDate(44), 6 ], [ handleGetDate(43), 6 ], [ handleGetDate(42), 5 ],
            [ handleGetDate(41), 5 ], [ handleGetDate(40), 4 ], [ handleGetDate(39), 4 ], [ handleGetDate(38), 5 ],
            [ handleGetDate(37), 5 ], [ handleGetDate(36), 5 ], [ handleGetDate(35), 7 ], [ handleGetDate(34), 7 ],
            [ handleGetDate(33), 7 ], [ handleGetDate(32), 10 ], [ handleGetDate(31), 9 ], [ handleGetDate(30), 9 ],
            [ handleGetDate(29), 10 ], [ handleGetDate(28), 11 ], [ handleGetDate(27), 11 ], [ handleGetDate(26), 8 ],
            [ handleGetDate(25), 8 ], [ handleGetDate(24), 7 ], [ handleGetDate(23), 8 ], [ handleGetDate(22), 9 ],
            [ handleGetDate(21), 8 ], [ handleGetDate(20), 9 ], [ handleGetDate(19), 10 ], [ handleGetDate(18), 9 ],
            [ handleGetDate(17), 10 ], [ handleGetDate(16), 16 ], [ handleGetDate(15), 17 ], [ handleGetDate(14), 16 ],
            [ handleGetDate(13), 17 ], [ handleGetDate(12), 16 ], [ handleGetDate(11), 15 ], [ handleGetDate(10), 14 ],
            [ handleGetDate(9), 10 ], [ handleGetDate(8), 18 ], [ handleGetDate(7), 15 ], [ handleGetDate(6), 14 ],
            [ handleGetDate(5), 16 ], [ handleGetDate(4), 16 ], [ handleGetDate(3), 17 ], [ handleGetDate(2), 7 ],
            [ handleGetDate(1), 7 ], [ handleGetDate(0), 7 ]
        ]
    }, {
        'key'   : 'Page Views',
        'color' : '#007AFF',
        'values': [
            [ handleGetDate(77), 19 ], [ handleGetDate(76), 21 ], [ handleGetDate(75), 23 ],
            [ handleGetDate(73), 14 ], [ handleGetDate(72), 13 ], [ handleGetDate(71), 15 ], [ handleGetDate(70), 16 ],
            [ handleGetDate(69), 16 ], [ handleGetDate(68), 14 ], [ handleGetDate(67), 14 ], [ handleGetDate(66), 13 ],
            [ handleGetDate(65), 12 ], [ handleGetDate(64), 13 ], [ handleGetDate(63), 13 ], [ handleGetDate(62), 15 ],
            [ handleGetDate(61), 16 ], [ handleGetDate(60), 16 ], [ handleGetDate(59), 17 ], [ handleGetDate(58), 17 ],
            [ handleGetDate(57), 18 ], [ handleGetDate(56), 15 ], [ handleGetDate(55), 15 ], [ handleGetDate(54), 15 ],
            [ handleGetDate(53), 24 ], [ handleGetDate(52), 22 ], [ handleGetDate(51), 18 ], [ handleGetDate(50), 25 ],
            [ handleGetDate(49), 17 ], [ handleGetDate(48), 16 ], [ handleGetDate(47), 18 ], [ handleGetDate(46), 18 ],
            [ handleGetDate(45), 18 ], [ handleGetDate(44), 16 ], [ handleGetDate(43), 14 ], [ handleGetDate(42), 14 ],
            [ handleGetDate(41), 13 ], [ handleGetDate(40), 14 ], [ handleGetDate(39), 13 ], [ handleGetDate(38), 10 ],
            [ handleGetDate(37), 29 ], [ handleGetDate(36), 23 ], [ handleGetDate(35), 22 ], [ handleGetDate(34), 21 ],
            [ handleGetDate(33), 11 ], [ handleGetDate(32), 10 ], [ handleGetDate(31), 9 ], [ handleGetDate(30), 10 ],
            [ handleGetDate(29), 13 ], [ handleGetDate(28), 14 ], [ handleGetDate(27), 14 ], [ handleGetDate(26), 13 ],
            [ handleGetDate(25), 12 ], [ handleGetDate(24), 11 ], [ handleGetDate(23), 13 ], [ handleGetDate(22), 13 ],
            [ handleGetDate(21), 13 ], [ handleGetDate(20), 13 ], [ handleGetDate(19), 14 ], [ handleGetDate(18), 13 ],
            [ handleGetDate(17), 13 ], [ handleGetDate(16), 19 ], [ handleGetDate(15), 21 ], [ handleGetDate(14), 22 ],
            [ handleGetDate(13), 12 ], [ handleGetDate(12), 24 ], [ handleGetDate(11), 24 ], [ handleGetDate(10), 22 ],
            [ handleGetDate(9), 16 ], [ handleGetDate(8), 15 ], [ handleGetDate(7), 12 ], [ handleGetDate(6), 12 ],
            [ handleGetDate(5), 15 ], [ handleGetDate(4), 15 ], [ handleGetDate(3), 15 ], [ handleGetDate(2), 18 ],
            [ handleGetDate(2), 18 ], [ handleGetDate(0), 17 ]
        ]
    } ];

    nv.addGraph(function () {
        var stackedAreaChart = nv.models.stackedAreaChart()
            .useInteractiveGuideline(true)
            .x(function (d) {
                return d[ 0 ]
            })
            .y(function (d) {
                return d[ 1 ]
            })
            .pointSize(0.5)
            .margin({'left': 35, 'right': 25, 'top': 20, 'bottom': 20})
            .controlLabels({stacked: 'Stacked'})
            .showControls(false)
            .duration(300);

        stackedAreaChart.xAxis.tickFormat(function (d) {
            var monthsName = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
            d = new Date(d);
            d = monthsName[ d.getMonth() ] + ' ' + d.getDate();
            return d;
        });
        stackedAreaChart.yAxis.tickFormat(d3.format(',.0f'));

        d3.select('#visitors-line-chart')
            .append('svg')
            .datum(visitorAreaChartData)
            .transition().duration(1000)
            .call(stackedAreaChart)
            .each('start', function () {
                setTimeout(function () {
                    d3.selectAll('#visitors-line-chart *').each(function () {
                        if (this.__transition__)
                            this.__transition__.duration = 1;
                    })
                }, 0)
            });

        nv.utils.windowResize(stackedAreaChart.update);
        return stackedAreaChart;
    });

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
            backgroundColor  : '#000',
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

    var visitorDonutChartData = [
        {'label': 'Return Visitors', 'value': 784466, 'color': '#007AFF'},
        {'label': 'New Visitors', 'value': 416747, 'color': '#24b7bc'},
        {'label': 'Visitors', 'value': 306747, 'color': '#d289fa'}
    ];
    var arcRadius = [
        {inner: 0.65, outer: 0.93},
        {inner: 0.6, outer: 1},
        {inner: 0.65, outer: 0.93},
    ];

    nv.addGraph(function () {
        var donutChart = nv.models.pieChart()
            .x(function (d) {
                return d.label
            })
            .y(function (d) {
                return d.value
            })
            .margin({'left': 10, 'right': 10, 'top': 10, 'bottom': 10})
            .showLegend(false)
            .donut(true)
            .growOnHover(false)
            .arcsRadius(arcRadius)
            .donutRatio(0.5);

        donutChart.labelFormat(d3.format(',.0f'));

        d3.select('#visitors-donut-chart').append('svg')
            .datum(visitorDonutChartData)
            .transition().duration(3000)
            .call(donutChart);

        return donutChart;
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
}, editor = function () {
    if ($('#ckeditorEmail').length) {
        CKEDITOR.config.uiColor = '#ffffff';
        CKEDITOR.config.toolbar = [ [ 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About' ] ];
        CKEDITOR.config.height = 100;
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
                name : 'Site Traffic'
            }
        ]
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
            visitorsAreaChart();
            todo();
            scheduleCalendar();
            editor();
            rickshaw()
        }
    }
}();
$(function () {
    icons.init();
});