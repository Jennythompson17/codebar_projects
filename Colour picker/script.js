/* Exercise 2: Color picker */


// set background color
function setPreviewColor(color) {
	$(document).on('keydown keypress keyup','#color', function() {
		var color = $('#inner-editor').val()
		$('.preview').css('background-color',$('#color').val() )
	}); 

}



$(document).ready(setPreviewColor())