/* Widget for Thom */

var adjectives = ['innovative','disruptive','visionary'];
var firstPhrases = ['running towards a goal most call impossible', 'toiling in the service of a common good', 'fusing talent with technology'];
		
function getStory(array) {
	var random_position = Math.floor( Math.random() * array.length );
	var random_element = array[random_position];
	return random_element;
	console.log(random_element);
}

function getImpact(item) {
	var random_adjective = getStory(adjectives);
	var random_first = getStory(firstPhrases);

	$(document).bind('submit','#form' , function(e) {
			$('#items').html($('#item').val()+ ' the ' + random_adjective + ' though-leader is passionate about ' + random_first)
			$('#item').val("") 
			$('#item').focus()
			e.preventDefault();
		});
	}



//JQuery method - wrapped to wait for page load
$(document).ready(getImpact())



//How this works:
//1) user inputs name
//2) on keypress or mouseclick choose a random adjective from the array
//3) pull name from input box
//4) concatenate name + "is" + [random adjective from array]
//5) use .html() to display this on the screen

//Gender - use "they" and replace with "him" or "her"