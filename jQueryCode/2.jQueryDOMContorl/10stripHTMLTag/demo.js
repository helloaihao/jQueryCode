(function($){
	$.fn.stripHtmlTag = function(){
		var regexp = /<[^>]*>/gi;

		$(this).html($(this).html().replace(regexp,''));
		
	};
})(jQuery);

$(function(){
	$("#btn-strip").click(function(){
		$("#strip-html-tag").stripHtmlTag();
	});
});