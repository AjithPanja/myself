$(function(){
   $(window).scroll(function(){
       var wscroll = $(window).scrollTop();
       if (wscroll > 75){
           $('#navbar').removeClass('navbar-pos-1').addClass('navbar-pos-2');
       }
       else{
           $('#navbar').removeClass('navbar-pos-2').addClass('navbar-pos-1');
       }
   }); 
});