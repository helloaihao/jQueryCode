$(document).ready(function(){
	$("button").click(function(){
		alert("这是第" + ($(this).parent().index()+1) + "个水果");
	});
});