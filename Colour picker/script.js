/* Exercise 2: Color picker */


// set background color
function setPreviewColor(previewColor) {
	$('.preview').css('background-color',previewColor );
	$('.color-code').text($('.preview').css('background-color'));
}

// add a box to the beginning of #colors
function addBox(colour) {
 	$('#colors').prepend("<div class='item' style='background-color: " + colour + ";'><div>");
 	$('#color').focus();
}



$(document).ready(function(){
	var colors = ['red','blue','green','orange','hotpink', 'silver','brown','black','purple','yellow','teal','grey'];
	var random_position = Math.floor( Math.random() * colors.length );
	var random_color = colors[random_position];

	$.each(colors, function(index, colour) {
		addBox(colour);
	});

	setPreviewColor(random_color);  
	$(document).on('change','#color', function() {
		var favouriteColor = $('#color').val();
		setPreviewColor(favouriteColor);
	});
	
	$(document).on('click','#add-to-favorite', function(){
		var favouriteColor = $('.preview').css('background-color');
		var length = $('#colors .item').length;
		if (length == 16) {
			$('#colors .item').last().remove();
		}
		addBox(favouriteColor);
	});
	var currentColor;
	$(document).on('mouseenter','#colors .item',  function(){
		currentColor = $('.preview').css('background-color');
		var hoverColor = $(this).css('background-color');
		setPreviewColor(hoverColor);

	}).on('mouseleave', '#colors .item', function() {
		setPreviewColor(currentColor);
	});

});
