
/*basic */
$(document).ready(function(){
    
    $(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.Layer_1').css('top',(180-(scrolled*.5))+'px');
    $('.Layer_2').css('top',(100-(scrolled*.5))+'px');
    $('#Layer_3').css('top',(0-(scrolled*.5))+'px');
}
  

$("#logo").click(function(){
        $('html,body').animate({
        scrollTop:$(".top").offset().top
        },'slow')
    })
      
    
    
});    /* end of doc ready */
