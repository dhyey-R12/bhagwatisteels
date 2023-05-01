// on page scroll animations js
// $(window).on('load',function() {
// 	$('.loader-wrapper').fadeOut('slow');
// });

$(document).ready(function(){
	
	// // navbar toggle js
	// $('.navbar_toggler').click(function(){
	// 	$('body').toggleClass('no_scroll');
	// 	$('.site_header').toggleClass('header_menu_active');
	// 	$(this).toggleClass('open_menu');
	// 	$(this).next("nav").toggleClass('navbar_animate');
	// });

	// banner slider js
	var $slider = $('.banner_slider');
	$slider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 400,
		dots: true,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	// got to page top js
	/*$(window).on('load scroll',function(){
		var	windowTop = $(window).scrollTop();
		if(windowTop > 600) {
			$('.pagetop').fadeIn();
		} else {
			$('.pagetop').fadeOut();
		}

		if(windowTop > 100) {
			$('.site_header').addClass('header_sticky_active');
		}else{
			$('.site_header').removeClass('header_sticky_active');
		}
	});
	$('.pagetop').on('click', function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0,
		}, 800);
	});*/
});