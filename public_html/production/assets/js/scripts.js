$(document).ready(function(){
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
	  nav : true,
	  loop: true,
	  autoplay: true,
	  autoplayHoverPause: true,
	  autoplayTimeout: 5000,
	  autoplaySpeed: 1500,
	  responsiveClass: true,
	  responsive:{
	  	0:{
	  		items:1,

	  		loop: true
	  	}
	  }
  });

  $(".article-carousel").owlCarousel({
	  nav : true,
	  autoplay: false,
	  autoplayHoverPause: true,
	  autoplayTimeout: 5000,
	  autoplaySpeed: 1500,
	  responsiveClass: true,
	  items:3,
	  loop:true,
	  responsive:{
	  	0:{
	  		items:3,

	  	}
	  }
  });

	$('#brunch').click(function() {
	  $('#lunch').not(this).removeClass("active");
	    $('#dinner').not(this).removeClass("active");
	      $('#specials').not(this).removeClass("active");
	        $(this).toggleClass("active");
	          $('.brunch-container').slideToggle("fast");
	            $( ".lunch-container" ).hide( "fast" );
	              $( ".dinner-container" ).hide( "fast" );
	                $( ".specials-container" ).hide( "fast" );
	});

    $('#lunch').click(function() {
      $('#brunch').not(this).removeClass("active");
        $('#dinner').not(this).removeClass("active");
          $('#specials').not(this).removeClass("active");
            $(this).toggleClass("active");
              $('.lunch-container').slideToggle("fast");
                $( ".brunch-container" ).hide( "fast" );
                  $( ".dinner-container" ).hide( "fast" );
                    $( ".specials-container" ).hide( "fast" );

    });

    $('#dinner').click(function() {
      $('#brunch').not(this).removeClass("active");
        $('#lunch').not(this).removeClass("active");
          $('#specials').not(this).removeClass("active");
            $(this).toggleClass("active");
              $('.dinner-container').slideToggle("fast");
                $( ".brunch-container" ).hide( "fast" );
                  $( ".lunch-container" ).hide( "fast" );
                    $( ".specials-container" ).hide( "fast" );
    });

    $('#specials').click(function() {
      $('#brunch').not(this).removeClass("active");
        $('#lunch').not(this).removeClass("active");
          $('#dinner').not(this).removeClass("active");
            $(this).toggleClass("active");
              $('.specials-container').slideToggle("fast");
                $( ".brunch-container" ).hide( "fast" );
                  $( ".lunch-container" ).hide( "fast" );
                    $( ".dinner-container" ).hide( "fast" );
    });

});

var windw = this;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);

    $window.scroll(function(e){
        if ($window.scrollTop() < pos) {
            $this.css({
                position: 'absolute',
                top: pos+400
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 400
            });
        }
    });
};

$('#f').followTo(300);
