$(document).ready(function(){

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
                top: pos+200
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 200
            });
        }
    });
};

$('#f').followTo(300);
