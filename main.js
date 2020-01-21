$(document).ready(function(){
   $('.menu-toggler').on('click', function () {
       $(this).toggleClass('open');
       $('.top-nav').toggleClass('open');

   });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');

    });

    $('.acc h2').on('click',function(){
        $(this).next('.content').slideToggle();
        $(this).parent().addClass('active');
        $(this).parent().siblings().children('content').slideUp();
        $(this).parent().siblings().removeClass('active');


    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: false
    });
});



