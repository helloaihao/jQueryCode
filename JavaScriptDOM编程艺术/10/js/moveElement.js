function moveElement(elementID, final_x, final_y, interval) {
	var elem = document.getElementById(elementID);
	if( elem.movement ) {
		clearTimeout(elem.movement);
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos == final_x && ypos == final_y) {
		return true;
	}
	if(xpos < final_x) {
		var dist = Math.ceil((final_x-xpos)/10);
		xpos += dist;
	}
	if(xpos > final_x) {
		var dist = Math.ceil((xpos-final_x)/10);
		xpos -= dist;
	}
	if(ypos < final_y) {
		var dist = Math.ceil((final_x-ypos)/10);
		ypos += dist;
	}
	if(ypos > final_y) {
		var dist = Math.ceil((xpos-final_x)/10);
		ypos -= dist;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('" + elementID + "'," + final_x + "," 
		+ final_y + "," + interval + ")";
	elem.movement = setTimeout(repeat,interval);
}