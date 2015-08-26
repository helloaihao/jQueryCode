$(function(){
	//选中
	$(".list-checkbox").click(function(){
		if( $(this).prop("checked") ) {
			$(this).parent().addClass("checked");
		} else {
			$(this).parent().removeClass("checked");
		}
	});

	//全选
	$("#btn-all-select").click(function(){
		$("#list-ul").children("li").each(function(){
				$(this).children().prop("checked", true);
				$(this).addClass("checked");
		});
		//$(".list-checkbox").prop("checked", true).parent().addClass("checked");
	});

	//反选
	$("#btn-invert").click(function(){
		$("#list-ul").children("li").each(function(){
			if( $(this).children().prop("checked") ) {
				$(this).children().prop("checked", false);
				$(this).removeClass("checked");
			} else {
				$(this).children().prop("checked", true);
				$(this).addClass("checked");
			}
		});
	});

	//取消
	$("#btn-cancel").click(function(){
		$("#list-ul").children("li").each(function(){
			$(this).children().prop("checked", false);
			$(this).removeClass("checked");
		});
	});
});