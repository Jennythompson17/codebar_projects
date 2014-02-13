/* Exercise 2: Color picker */


// set background color
function setPreviewColor(color) {
	$(document).on('click','#add-to-favorite', function() {
		var color = $('#inner-editor').val()
		$('.preview').css('background-color',$('#color').val() )
	}); 
}

//Input text
// on keypress or keydown or keyup
	//Grab the preview div
	//Change the color class

$(document).ready(setPreviewColor())