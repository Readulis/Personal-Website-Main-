$(window).on('scroll',function(){
	if($(window).scrollTop() > 300){
		$('nav').addClass('navbar-reduce');
	}else{
		$('nav').removeClass('navbar-reduce');
	}
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll').on("click", function () {
	$('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
	target: '#mainNav',
	offset: navHeight
});
/*--/ Navbar Menu Reduce /--*/
$(window).trigger('scroll');
$(window).on('scroll', function () {
	var pixels = 50;
	var top = 1200;
	if ($(window).scrollTop() > pixels) {
		$('.navbar-expand-md').addClass('navbar-reduce');
		$('.navbar-expand-md').removeClass('navbar-trans');
	} else {
		$('.navbar-expand-md').addClass('navbar-trans');
		$('.navbar-expand-md').removeClass('navbar-reduce');
	}
	if ($(window).scrollTop() > top) {
		$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
	} else {
		$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
	}
});


if ($('.text-slider').length == 1) {
	var typed_strings = $('.text-slider-items').text();
	var typed = new Typed('.text-slider', {
		strings: typed_strings.split(','),
		typeSpeed: 80,
		loop: true,
		backDelay: 1100,
		backSpeed: 30
	});
}
