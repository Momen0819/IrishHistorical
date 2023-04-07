let marker;
google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#80bc97"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#32b380"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#32b380"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ],
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var bounds = new google.maps.LatLngBounds();
    const image = 'images/map-marker-3.png';

    // Multiple Markers
    var markers = [
        ["Zamil House", 26.3122226, 50.2238099, "M_1"],
        ["Zamil House", 27.3122226, 48.2238099, "M_1"],
        ["Zamil House", 36.3122226, 10.2238099, "M_1"],
    ];


    // Display multiple markers on a map
    var infowindow = new google.maps.InfoWindow(), marker, i;

     // Loop through our array of markers & place each one on the map  
    for (i = 0; i < markers.length; i++) {
    
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
            icon: image,
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
            
            return function () {
                
                infowindow.setContent(marker.title)
                infowindow.open({
                    anchor: marker,
                    map,
                    shouldFocus: false,
                });

                $(".MapInfo").each(function () {
                    $(this).css("display", "none");
                    var div_id = $(this).attr("id");
                    var markpoint = markers[i][3];

                    if (div_id == markpoint)
                    {
                        $(this).attr("style", "display:;");
                    }

                });
            };

        })(marker, i));

        map.fitBounds(bounds);
    }
}