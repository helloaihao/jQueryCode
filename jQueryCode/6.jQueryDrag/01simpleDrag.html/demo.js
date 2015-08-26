$(function(){
	var move = false;
	var x, y;

	$(".drag").click(function(){}).mousedown(function(e){
		move = true;
		x = e.pageX-parseInt($(".drag").css("left"));
		y = e.pageY-parseInt($(".drag").css("top"));
		$(".drag").fadeTo(20, 0.5);
	});

	$(document).mousemove(function(e){

		if( move ) {
			var new_x = e.pageX - x;
			var new_y = e.pageY - y;
			$(".drag").css({top:new_y, left:new_x});
		}
	}).mouseup(function(){
		move = false;
		$(".drag").fadeTo("fast", 1);
	});
	
});