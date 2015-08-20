$(document).ready(function(){
	jQuery.scrollTo=function(scrolldom, scrolltime){
		$(scrolldom).click(function(){
			var scrollToDom = $(this).attr("page-scroll");
			$(this).addClass("thisscroll").siblings().removeClass("thisscroll");
			$("html,body").animate(
				{
					scrollTop: $(scrollToDom).offset().top
				},
				scrolltime
			);
			return false;
		});
	};
	$.scrollTo("#scrollnav a", 2000);
});