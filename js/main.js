jQuery(function ($) {

    var title, id, link, random;
    $('.content h2').each(function(){
        title = $(this).attr('title');
        id = $(this).attr('id');
        link = $('<li><a href="#'+id+'" > '+title+'</a></li>');
        $(link).click(function(e){
            e.preventDefault();
            $('.main-navbar .navbar-nav li').removeClass('active');
            $('.main-navbar').collapse('hide');

            $(this).addClass('active');
            $("html, body").animate({ scrollTop: $($(this).children('a').attr('href')).offset().top-80 }, 1000);
        });
        $('.main-navbar .navbar-nav').append(link);

    });

    var campingPosition = new google.maps.LatLng(45.9788072, 8.8719385);
    var mapOptions = {
        zoom: 18,
        center: campingPosition,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };


    var map = new google.maps.Map(document.getElementById('google-maps'),
        mapOptions);

    var marker = new google.maps.Marker({
        position: campingPosition,
        map: map,
        title: 'Zeltplatz'
    });
});
