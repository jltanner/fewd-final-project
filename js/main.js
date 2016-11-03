$(".hamburger").on("click", function() {
	$("nav").slideToggle();
});
$(window).on("resize", function() {
	if ($(window).width() >= 768) {
		$("nav").removeAttr("style");
	};
});