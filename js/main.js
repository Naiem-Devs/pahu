(function ($) {
"use strict";

// owlCarousel
$('.hero-slider').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.project-slider').owlCarousel({
    loop:true,
    margin:0,
	items:4,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
});




// WOW active
new WOW().init();


})(jQuery);