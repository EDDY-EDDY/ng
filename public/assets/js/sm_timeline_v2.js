"use strict";
var googleMapSetting = function () {
    "use strict";
    var mapDefault;
    var cobaltStyles = [ {
        "featureType": "all",
        "elementType": "all",
        "stylers"    : [ {"invert_lightness": true}, {"saturation": 10}, {"lightness": 10}, {"gamma": 0.8}, {"hue": "#0072ff"} ]
    }, {"featureType": "water", "stylers": [ {"visibility": "on"}, {"color": "#0072ff"} ]} ];

    var mapOptions = {
        zoom            : 6,
        center          : new google.maps.LatLng(22.5937, 79.9000),
        mapTypeId       : google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
    };
    mapDefault = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    mapDefault.setOptions({styles: cobaltStyles});

};

var Timeline = function () {
    "use strict";
    return {
        init: function () {
            googleMapSetting();
        }
    };
}();

$(function () {
    googleMapSetting();
})