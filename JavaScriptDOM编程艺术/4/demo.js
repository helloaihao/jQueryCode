function addLoadEvent(func) {
	var oldOnload = window.onload;
	if(typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldOnload();
			func();
		}
	}
}

function showPic(pic) {
	var source = pic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);

	var text = pic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}

function prepareGallery() {
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i = 0; i < links.length; i ++) {
		links[i].onclick = function() {
			showPic(this);
			return false;
		}
	}
}

addLoadEvent(prepareGallery);
