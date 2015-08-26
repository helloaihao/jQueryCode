
(function($){
	$.fn.maxLength = function(max) {
		$(this).each(function(){
			//ban mouseright
			this.oncontextmenu = function() {return false;};
			$(this).bind('keydown keyup change', function(e) {
				/* Act on the event */
				if( this.value.length > max ) {
					this.value = this.value.substring(0, max);
				}
			});
		});

		// $(this).each(function(){
		// 	this.onkeyup = function(){
		// 		if( this.value.length > max ) {
		// 			this.value = this.value.substring(0, max);
		// 		}
		// 	};
		// 	this.onkeydown = function(){
		// 		if( this.value.length > max ) {
		// 			this.value = this.value.substring(0, max);
		// 		}
		// 	};
		// 	this.onchange = function(){
		// 		if( this.value.length > max ) {
		// 			this.value = this.value.substring(0, max);
		// 		}
		// 	}
		// });
	};
})(jQuery);

$(function(){
	$("#max-len-textarea").maxLength(5);
});