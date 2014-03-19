/* Widget for Thom */


//array of description options
//$(document).ready(function(){
	//var adjectives = ['innovative','disruptive','visionary'];
	//var random_position = Math.floor( Math.random() * adjectives.length );
	//var random_adjective = adjectives[random_position];

	//$.each(adjectives, function(index, adjective) {
		//addBox(adjective);
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

	$(document).on('click','#add-to-list' , function(e) {
				$('#items').html($('#item').val()+ ' the ' + random_adjective + ' though-leader is passionate about ' + random_first)
				$('#item').val("") 
				$('#item').focus()
		});

	$(document).on('keypress', function(e) {
    		if(e.which == 13) {
				$('#items').html($('#item').val()+ ' the ' + random_adjective + ' though-leader is passionate about ' + random_first)
				$('#item').val("") 
				$('#item').focus()
				}
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