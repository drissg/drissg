

$(function(){
    var campingPosition =  new google.maps.LatLng(46.980348, 8.417904);
    var mapOptions = {
        zoom: 16,
        center:campingPosition,
        scrollwheel: false
    };


    var map = new google.maps.Map(document.getElementById('google-maps'),
        mapOptions);

    var marker = new google.maps.Marker({
        position: campingPosition,
        map: map,
        title: 'Zeltplatz'
    });
});
