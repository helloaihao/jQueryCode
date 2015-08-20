$(document).ready(function(){
	$("#id-textarea-default").charCount();
	$("#id-textarea-custom").charCount({
		allowed: 20,
		warning: 10,
		cssColor: 'red',
		cssWarningColor: 'green',
		cssExceededCplor: 'black',
		counterText: '剩余字数:'
	});
});