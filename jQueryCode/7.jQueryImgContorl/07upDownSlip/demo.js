$(function(){
	$('.holder').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).children('.mv-img').animate({'top': '-200px'}, 400);
		$(this).children('.text').fadeIn(300);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).children('.text').fadeOut(300);
		$(this).children('.mv-img').animate({'top': '0'}, 400);
	});
});