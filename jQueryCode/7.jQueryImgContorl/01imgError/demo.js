$(function(){
	$("img").error(function(){
		$(this).replaceWith("<p><b>图片未加载</b></p>");
	});
});