$(document).ready(function() {
	var owl = $('[data-item="owl-main"]');
	owl.owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		items:1,
		autoplay:false,
		navText: [
			"<i class='my-arrow-left'></i>",
			"<i class='my-arrow-right'></i>"
		],
		dots: true,
	});
});

