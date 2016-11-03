$(".hamburger").on("click", function() {
	$("nav").slideToggle();
});
$(window).on("resize", function() {
	if ($(window).width() >= 768) {
		$("nav").removeAttr("style");
	};
});

// LIGHTBOX TESTING

	$(".lightbox-trigger").on("click", function(e) {
		e.preventDefault();
		var image_href = $(this).attr("href");
		var image_href_next = $(this).next().attr("href");
		var image_href_prev = $(this).prev().attr("href");

		//create HTML for lightbox window
		var lightbox = 
		'<div id="lightbox">' +
		'<i class="fa fa-times close"></i>' +
			'<div id="content">' + 
				'<i class="fa fa-chevron-left prev"></i>' +
				'<img src="' + image_href +'" />' +
				'<i class="fa fa-chevron-right next"></i>'
			'</div>' +	
		'</div>';

		// insert and fade in
		$(lightbox).hide().appendTo("body").fadeIn();

		// click to close
		$("#lightbox i.close").on("click", function() {
			$("#lightbox").fadeToggle();
		});

		// next & prev image functions
		function nextImg() {
			$("#content img").attr("src", image_href_next);
		}
		function prevImg() {
			$("#content img").attr("src", image_href_prev);
		}

		// next & prev click events
		$("#lightbox img").on("click", function(){
			nextImg();
		});
		$("#lightbox img").on("swipeleft", function(){
			nextImg();
		});
		$("#lightbox img").on("swiperight", function(){
			prevImg();
		});

		$("#lightbox i.next").on("click", function(){
			nextImg();
		});

		$("#lightbox i.prev").on("click", function(){
			prevImg();
		});


	});


