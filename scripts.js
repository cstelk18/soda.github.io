$(document).ready(function() {
$("#nav-button-open").click(function() {
$("#slide-nav").show(800);
});

$("#nav-button").click(function() {
$("#slide-nav").hide(800);
});

$("#nav-button-open").click(function() {
$("#nav-button").hide(800);
});

$("#nav-button-open").click(function() {
$("#nav-button-open").hide(800);
});

$("#nav-button-open").click(function() {
$("#nav-button").show(800);
});

$("#nav-button").click(function() {
$("#nav-button-open").show(800);
});

$("#nav-button").click(function() {
$("#nav-button").hide(800);
});
});
///////////////////////////////////
$(document).ready(function() {
$("#learn-more").click(function() {
$("#learn-more-content").show(2000);
});
});
//////////////////////////////////
$(document).ready(function() {
$("#learn-more").click(function() {
$("#learn-more-close-button").show(150);
});
});
/////////////////////////////////
$(document).ready(function() {
$("#learn-more-close-button").click(function() {
$("#learn-more-content").hide(150);
});
});
/////////////////////////////////
$(document).ready(function() {
$("#learn-more-close-button").click(function() {
$("#learn-more-close-button").hide(150);
});
});
///////////////////////////////
$(document).ready(function() {
 $("#slide-nav").hide();
});
///////////////////////////////////
$(document).ready(function() {
 $("#nav-button").hide();
});
///////////////////////////////////
$(document).ready(function() {
 $(".nav-scroll").hide();
});
///////////////////////////////////
$(document).ready(function() {
 $(".content-section").hide();
});
////////////////////////////////////
$(document).ready(function() {
 $("#learn-more-content").hide();
});
////////////////////////////////////
$(document).ready(function() {
 $("#learn-more-close-button").hide();
});
//////////////////////////////////////
(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 450) {
                $('.nav-scroll').fadeIn(300);
            } else {
                $('.nav-scroll').fadeOut(350);
            }
        });
    });
})(jQuery);
///////////////////////////////////////////////

// For Image Slide
var current = 0,
    slides = document.getElementsByClassName("imgSlides");

setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 5000);
/////////////////////////////////////////////////
(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 800) {
                $('.content-section2').fadeIn(750);
            } else {
                $('.content-section2').fadeOut(350);
          }
        });
    });
})(jQuery);
///////////////////////////////////////////////////////
(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 450) {
                $('.content-section').fadeIn(750);
            } else {
                $('.content-section').fadeOut(350);
          }
        });
    });
})(jQuery);
////////////////////////////////////////////////////////
(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1470) {
                $('.content-section3').fadeIn(750);
            } else {
                $('.content-section3').fadeOut(350);
          }
        });
    });
})(jQuery);
