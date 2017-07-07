$(document).ready(function(){

// New Show/Hide Menu Items //

  $('.menu-btn a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.menu-btn a').removeClass('active');
		$('.meal-container').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});


  google.maps.event.addDomListener(window, 'load', init);

  function init() {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
          // How zoomed in you want the map to start at (always required)
          zoom: 17,

          // The latitude and longitude to center the map (always required)
          center: new google.maps.LatLng(41.1529328, -81.3591974), // kent

          // How you would like to style the map.
          // This is where you would paste any style found on Snazzy Maps.
          styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
      };

      // Get the HTML DOM element that will contain your map
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById('map');

      // Create the Google Map using our element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(41.1529328, -81.3591974),
          map: map,
          title: 'Snazzy!'
      });
  }

  $(".photo-gallery").owlCarousel({
	  nav : false,
	  loop: true,
	  autoplay: true,
	  autoplayHoverPause: true,
	  autoplayTimeout: 5000,
	  autoplaySpeed: 1500,
	  responsiveClass: true,
    items:1,
    loop: true,
	  responsive:{
      800: {
        nav: true
      }
	  }
  });

  $(".news-carousel").owlCarousel({
	  nav : true,
	  autoplay: true,
	  autoplayHoverPause: true,
	  autoplayTimeout: 5000,
	  autoplaySpeed: 1500,
	  responsiveClass: true,
	  items:1,
	  loop:true,
	  responsive: {
	  	800: {
	  		items:2,
        nav : true,
        loop: true
	  	}
	  }
  });

  $('.top').on('click', function() {
  $parent_box = $(this).closest('.box');
  $parent_box.siblings().find('.bottom').hide();
  $parent_box.find('.bottom').toggle();


});


});
//scroll menu until a point
var windw = this;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);

    $window.scroll(function(e){
        if ($window.scrollTop() < pos) {
            $this.css({
                position: 'absolute',
                top: 0
            });
        } else {
            $this.css({
                position: 'fixed',
                top: pos
            });
        }
    });
};

$(".scroll-menu-side").followTo(230);


//smooth scroll function
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
