/* Exercise 2: Color picker */


// set background color
function setPreviewColor(color) {
	$(document).on('keydown','#color', function() {
		var color = $('#inner-editor').val()
		$('.preview').css('background-color',$('#color').val() )
	}); 

	$(document).on('keypress','#color', function() {
		var color = $('#inner-editor').val()
		$('.preview').css('background-color',$('#color').val() )
	}); 

	$(document).on('keyup','#color', function() {
		var color = $('#inner-editor').val()
		$('.preview').css('background-color',$('#color').val() )
	}); 
}



$(document).ready(setPreviewColor())