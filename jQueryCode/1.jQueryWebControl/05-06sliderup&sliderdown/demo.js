$(document).ready(function(){
	$("#btn-slideup").click(function(){
		$("#div-slide").slideUp("fast");
	});

	$("#btn-slidedown").click(function(){
		$("#div-slide").slideDown("1000");

	});

	$("#btn-slideToggle").click(function(){
		$("#div-slide").slideToggle("1000");
	});
});