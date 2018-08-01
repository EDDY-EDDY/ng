"use strict";
var googleMap = function () {
    var latitude = 10.0586301,
        longitude = 76.6502277,
        map_zoom = 14;
    var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    var marker_url = (is_internetExplorer11) ? '../../assets/images/icons/google-maps/icon-location.png' : 'assets/img/icon-location.svg';
    var main_color = '#007aff',
        saturation_value = -20,
        brightness_value = 5;
    var map_options = {
        center           : new google.maps.LatLng(latitude, longitude),
        zoom             : map_zoom,
        panControl       : false,
        zoomControl      : false,
        mapTypeControl   : false,
        streetViewControl: false,
        mapTypeId        : google.maps.MapTypeId.ROADMAP,
        scrollwheel      : false
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), map_options);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map     : map,
        visible : true,
        icon    : marker_url
    });
    function CustomZoomControl(controlDiv, map) {
        var controlUIzoomIn = document.getElementById('map-zoom-in'),
            controlUIzoomOut = document.getElementById('map-zoom-out');
        controlDiv.appendChild(controlUIzoomIn);
        controlDiv.appendChild(controlUIzoomOut);
        google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
            map.setZoom(map.getZoom() + 1)
        });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
            map.setZoom(map.getZoom() - 1)
        });
    }
    var zoomControlDiv = document.createElement('div');
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);
    map.controls[ google.maps.ControlPosition.LEFT_TOP ].push(zoomControlDiv);
};
var GoogleMap = function () {
    "use strict";
    return {
        init: function () {
            googleMap();
        }
    }
}();
$(document).ready(function () {
    GoogleMap.init();
});