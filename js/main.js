var image_href;
var image_href_next;
var image_href_prev;
var lightbox;

// LIGHTBOX

	$(".lightbox-trigger").on("click", function(e) {
		e.preventDefault();
		image_href = $(this).attr("href");
		image_href_next = $(this).next().attr("href");
		image_href_prev = $(this).prev().attr("href");

		//create HTML for lightbox window
		lightbox = 
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
		$(image_href).addClass(".in-view");

		// click to close
		$("body").on("click", "#lightbox", ".close", function() {
			$(lightbox).fadeOut();
		});

		$("#lightbox img").on("click", function(){
		nextImg();
		$("#content img").removeClass(".in-view");
		});

	});


	

	// next & prev image functions
	function nextImg() {
		$("#content img").attr("src", image_href_next).addClass(".in-view");
	}
	function prevImg() {
		$("#content img").attr("src", image_href_prev);
	}

	// next & prev click events
	$("#lightbox img").on("click", function(){
		nextImg();
		$("lightbox img").addClass("in-view");
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

// HAMBURGER MENU
$(".hamburger").on("click", function() {
	$("nav").slideToggle();
	$(".consume").css("display", "none");
});
$(window).on("resize", function() {
	if ($(window).width() >= 768) {
		$("nav").removeAttr("style");
		$(".consume").removeAttr("style");
	};
});

// CONSUME FADE-IN / -OUT
$(document).ready(function() {
	var consume = $("#consume-box");
	$(consume).hide();
		$(function () {
	    setInterval(function () {
	        consume.fadeIn(1000, function () {
	            consume.fadeOut(1000, function () {
	                consume.fadeIn(1000)
	            });
	        });
	    }, 4000);
	});
})
