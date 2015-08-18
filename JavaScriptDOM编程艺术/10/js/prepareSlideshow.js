function prepareSlideshow() {
	var preview = document.getElementById("preview");
	preview.style.position = "absolute";
	preview.style.left = "0px";
	preview.style.top = "0px";

	var list = document.getElementById("linklist");
	var links = list.getElementsByTagName("img");
	
	links[0].onmouseover = function() {
		moveElement("preview", 0, 0, 10);
	}

	links[1].onmouseover = function() {
		moveElement("preview", -425, 0, 10);
	}

	links[2].onmouseover = function() {
		moveElement("preview", -425*2, 0, 10);
	}

	links[3].onmouseover = function() {
		moveElement("preview", -425*3, 0, 10);
	}
}

addLoadEvent(prepareSlideshow);