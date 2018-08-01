"use strict";
var basicBar = function () {
    Highcharts.chart('basic_bar', {
        chart      : {
            type: 'bar'
        },
        title      : {
            text: 'Historic World Population by Region'
        },
        subtitle   : {
            text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis      : {
            categories: [ 'Africa', 'America', 'Asia', 'Europe', 'Oceania' ],
            title     : {
                text: null
            }
        },
        yAxis      : {
            min   : 0,
            title : {
                text : 'Population (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip    : {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend     : {
            layout         : 'vertical',
            align          : 'right',
            verticalAlign  : 'top',
            x              : -180,
            y              : -150,
            floating       : true,
            borderWidth    : 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow         : true
        },
        credits    : {
            enabled: false
        },
        series     : [ {
            name: 'Year 2015',
            data: [ 107, 310, 635, 203, 112 ]
        }, {
            name: 'Year 2016',
            data: [ 133, 156, 947, 408, 156 ]
        }, {
            name: 'Year 2017',
            data: [ 814, 841, 314, 727, 311 ]
        }, {
            name: 'Year 2018',
            data: [ 216, 101, 436, 738, 400 ]
        } ]
    });
};
var ChartHigh = function () {
    "use strict";
    return {
        init: function () {
            basicBar();
        }
    }
}();
$(document).ready(function () {
    ChartHigh.init();
});