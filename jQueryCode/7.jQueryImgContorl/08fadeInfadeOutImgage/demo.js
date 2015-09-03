$(function(){
	$('#img-list img').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).parent().siblings().children().animate({opacity:0.1}, 400);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).parent().siblings().children().animate({opacity:1}, 400);
	});
});