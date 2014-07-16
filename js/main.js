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
            $("html, body").animate({ scrollTop: $($(this).children('a').attr('href')).offset().top-60 }, 1000);
        });
        $('.main-navbar .navbar-nav').append(link);

    });

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
});
