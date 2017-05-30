$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
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

});
