/* Exercise 2: Color picker */


// set background color
function setPreviewColor(color) {
	$(document).on('click change','.preview', function() {
		$(this).css('background-color','green' )
	}); 
}

//Input text and keypress or keydown or keyup
//Grab the preview div
//Change the color class

$(document).ready(setPreviewColor())