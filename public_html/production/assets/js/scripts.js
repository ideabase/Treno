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
