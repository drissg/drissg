$(function () {
    var campingPosition = new google.maps.LatLng(46.980348, 8.417904);
    var mapOptions = {
        zoom: 16,
        center: campingPosition,
        scrollwheel: false
    };


    var map = new google.maps.Map(document.getElementById('google-maps'),
        mapOptions);

    var marker = new google.maps.Marker({
        position: campingPosition,
        map: map,
        title: 'Zeltplatz'
    });

    var panoOptions = {
        addressControlOptions: {
            position: google.maps.ControlPosition.BOTTOM
        },
        linksControl: false,
        panControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        enableCloseButton: false,
        visible: true
    };

    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('awesome-tent'),
        panoOptions

    );

    panorama.registerPanoProvider(function (pano) {
        return {
            location: {
                pano: pano,
                description: "Im Zelt"
            },
            copyright: 'Dreamhead 2014',
            tiles: {
                tileSize: new google.maps.Size(512, 512),
                worldSize: new google.maps.Size(6000, 3000),
                originHeading: 90, // To align the panorama with the headings in the links.
                getTileUrl: function (room, zoom, x, y) {
                    return "http://new.drissig.ch/img/tile.jpg";
                }
            }
        };
    });

    panorama.setPano('panorama');
});
