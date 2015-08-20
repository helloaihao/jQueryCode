$(document).ready(function(){
	$("#btn-start").click(function(){
		$("#id-animation").animate({left: '350px', opacity: 0.6}, "slow").animate({height: '350px', opacity: 0.9}, "slow").animate({width: '350px', opacity: 0.1}, "slow").animate({left: '100px', opacity: 0.6}, "slow");
	});
	$("#btn-stop").click(function(){
		$("#id-animation").stop(true, true);
	});
});