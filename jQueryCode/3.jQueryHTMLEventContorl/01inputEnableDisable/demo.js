$(function(){
	$("#btn-ctl").click(function(){
		var input = $("#input-text");
		if( input.attr("disabled") == "disabled" ) {
			input.removeAttr("disabled");
			$("#btn-ctl").html("禁用");
		} else {
			input.attr("disabled", "disabled");
			$("#btn-ctl").html("启用");
		}
	});
});