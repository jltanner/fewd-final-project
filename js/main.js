var image_href;
var image_href_next;
var image_href_prev;
var lightbox;
var winW = $(window).width();

var excerpt = $("a.lightbox-trigger").map(function() {
    return this.href;
}).toArray();
var page = 0;

// LIGHTBOX
$(".lightbox-trigger").on("click", function(e) {
	e.preventDefault();
	image_href = $(this).attr("href");
	image_href_next = $(this).next().attr("href");
	image_href_prev = $(this).prev().attr("href");

	// create HTML for lightbox window
	lightbox = 
	'<div id="lightbox">' +
		'<i class="fa fa-times close"></i>' +
		'<div id="content">' + 
			'<i class="fa fa-chevron-left prev"></i>' +
			'<img src="' + excerpt[0] +'" />' +
			'<i class="fa fa-chevron-right next"></i>'
		'</div>' +	
	'</div>';

	// insert and fade in
	$(lightbox).hide().appendTo("body").fadeIn();
});

// close lightbox
$("body").on("click", "i.close", function() {
	$("body #lightbox").fadeOut();
});

// next & prev image functions
function next() {
	$("#content img").attr("src", excerpt[page+1]);
	if (page == excerpt.length - 1) {
		page = 0;
		$("#content img").attr("src", excerpt[page]);
	}
	else {
		page++;
	}
};
function prev() {
	$("#content img").attr("src", excerpt[page-1]);
	if (page == 0) {
		page = excerpt.length - 1;
		$("#content img").attr("src", excerpt[page]);
	}
	else {
		page--;
	}
};

// next & prev image click events
$(document).ready(function() {
	winW = $(window).width();
	if (winW > 768) {
		$("body").on("click", "#content img", function(){
			next();
		});
		$("body").on("click", "i.next", function(){
			next();
		});
		$("body").on("click", "i.prev", function(){
			prev();
		});
	} else if (winW <= 768) {
		$("body").on("swipeleft", "#content img", function() {
			next();
		});
		$("body").on("swiperight", "#content img", function() {
			prev();
		});
		$("body").on("tap", function() {
			$("#lightbox i.close").slideToggle();
		});
		$("body").on("tap", "#lightbox i.close", function() {
			$("body #lightbox").fadeOut();
		});
	}
})

$(document).on("keydown", function(e) {
	if (e.keyCode == 39) {  
		next();
	}
	if(e.keyCode==37) {
		prev();
	}
});

$(window).on("resize", function() {
	winW = $(window).width();
	if (winW <= 768) {
		$("body #lightbox i").hide();
	} else {
		$("body #lightbox i").show();
	}
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
