$(document).ready(function(){
	
	$("#id-button-fadeout").click(function(){
		$("#id-div-fade").fadeOut(3000);
	});

	$("#id-button-fadein").click(function(){
		$("#id-div-fade").fadeIn("fast");
	});

	$("#id-button-fadeToggle").click(function(){
		$("#id-div-fade").fadeToggle(3000);
	});

});