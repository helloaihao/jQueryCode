cache = [];
(function($){
	$.preLoadingImage = function(){
		var args_len = arguments.length;
		for(var i = args_len - 1; i >= 0; i --) {
			var cacheImage = document.createElement('img');
			cacheImage.src = arguments[i];
			cache.push(cacheImage);
		}
	}
})(jQuery);

$.preLoadingImage("../../demo.png");

for(var i = 0; i < cache.length; i ++) {
	$('#img-list').append(cache.pop());
}