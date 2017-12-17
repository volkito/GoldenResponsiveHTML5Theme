/*fixed-top özellikli menünün 400px ve üzerinde değişimi*/
jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop(),
        navbar = $('.fixed-top');
    
    if (scrollPosition > 400) {
        navbar.addClass('change-fix-top');
    } else {
        navbar.removeClass('change-fix-top');
    }
    });
});
/*Geçişlerin akışkan olmasını sağlar*/
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