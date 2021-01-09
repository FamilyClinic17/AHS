// JavaScript Document

// Enables Smooth Window Scrolling Using TweenMax Javascript Library.

$(function(){	

    var $window = $(window);
	var scrollTime = 0.7;
	var scrollDistance = 200;

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();	

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5							
			});
	});
});

var millionCheck = 0;
var startCheck = 0;


//Tooltip Script - This enables the Jquery tooltip functionality.

  $(function() {
    $( document ).tooltip({
	track: true
	});
  });
  

// Condom Bubble Scroll - This controls the parallax background for the Condom section.

function parallaxBubbles() {
	var scrollPosition = $(window).scrollTop();
	$('.condomBubbles').css('background-position',((0 - (scrollPosition * .1))+'px ')+((0 - (scrollPosition * .3))+'px') );
}

$(document).ready(function() {
	$(window).bind('scroll', function(e) {
		parallaxBubbles();
	});
});


//Positive Sign Scroll - This controlls part of the parallax background for the Testing section.

function parallaxPositive() {
	var scrollPosition = $(window).scrollTop();
	$('.positiveSigns').css('background-position',((0 + (scrollPosition * 0))+'px ')+((0 - (scrollPosition * 0.3))+'px') );
}

$(document).ready(function() {
	$(window).bind('scroll', function(e) {
		parallaxPositive();
	});
});


//Negative Sign Scroll - This controlls part of the parallax background for the Testing section.

function parallaxNegative() {
	var scrollPosition = $(window).scrollTop();
	$('.negativeSigns').css('background-position',((0 - (scrollPosition * 0))+'px ')+((0 + (scrollPosition * 0.3))+'px') );
}

$(document).ready(function() {
	$(window).bind('scroll', function(e) {
		parallaxNegative();
	});
});


//Bandage Scroll - This controlls the parallax background for the Vaccination section.

function parallaxBandage() {
	var scrollPosition = $(window).scrollTop();
	$('.bandages').css('background-position',((0 - (scrollPosition * 0.1))+'px ')+((0 - (scrollPosition * 0.1))+'px') );
}

$(document).ready(function() {
	$(window).bind('scroll', function(e) {
		parallaxBandage();
	});
});


/*This controlls how DOM elements animate when a user scrolls to a section of the page */

$(document).ready(function(e) {
    
	/* Every time the window is scrolled ... */
	$(window).scroll( function() {
		
	/*Check the location of each desired element */
	$('#million').each( function(i) {
		
var bottom_of_object = $(this).position().top + $(this).outerHeight();
var bottom_of_window = $(window).scrollTop() + $(window).height();

var x = 0;
var y = 0;

	/* If the object is completely visible in the window, fade it in */
			if (bottom_of_window > bottom_of_object) {
				if (millionCheck != 1){
				//$(this).animate({'background-position-y':'220px'}, 1000);
				$(this).addClass("backgroundPositionBottom");
				millionCheck = 1;
				}
			}
		
		});
	});
});