$(document).ready(function() {
	$("#id-button-show").click(function() {
		$("#demo1").show();
	});

	$("#id-button-hide").click(function() {
		$("#demo1").hide(1000, function(){
			alert("huidiao");
		});
	});

	$('#id-button-toggle').click(function(){
		$(".demo2").toggle();
	});
});
