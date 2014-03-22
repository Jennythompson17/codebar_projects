/* Widget for Thom */

//Questions
//1) how do I attach a re-load event handler to thesubmit button for submissions after the first one?


var adjectives = ['lean', 'agile', 'innovative', 'disruptive', 'impactful', 'cutting-edge', 'sustainable', 'avid', 'adaptive', 'nimble', 'practical', 'accessible', 'people-centred', 'talented', 'supportive', 'authentic', 'fearless', 'excited', 'diverse', 'open', 'digital', 'experimental', 'dedicated', 'progressive', 'visionary', 'world-class', 'iconic', 'resilient', 'inspirational', 'compelling', 'hard-hitting', 'fruitful', 'credible', 'evidenced', 'immense', 'creative', 'awe-inspiring', 'sudden'];
var descriptor = [ 'adventurer', 'individual', 'communicator', 'public speaker', 'event planning genius', 'genius', 'designer', 'social designer', 'facilitator', 'logistics and numbers ninja', 'expert', 'social expert', 'guru', 'venture hunter', 'contrarian communicator', 'instigator', 'grassroots volunteer', 'world roamer', 'pop-up restaurateur', 'campaigner', 'connector', 'changemaker', 'digital change agent', 'early interventionist', 'social intrapreneur', 'lover of life']
var firstAim = ['running towards a goal most call impossible', 'toiling in the service of a common good', 'fusing talent with technology', 'making a difference in the world', 'creating new movements', 'institutions and companies', 'inspiring organisations across business and society'];
var cause =[ 'our global mission to improve', 'our working together for', 'the building of partnerships with', 'the turning of inventions into marketable applications for', 'the improvement of the innovative capacity of', 'the development of practical insights in the service of', 'the deep connection with amazing people who are impassioned about', 'the potential to harness the talents and skills of diverse people for' ]
var who =['people', 'public services', 'the user experience', 'everyone\'s health', 'commercial cultural and social potential','equal access to education for all', 'improving outcomes', 'a hub for innovators the world over', 'exciting people-driven startups', 'making a difference in the world', 'the future', 'children', 'young people', 'information', 'the information age', 'growing a stronger society', 'solving society\'s intractable problems', 'the obesity epidemic', 'women', 'men', 'young men', 'young women', 'better answers to our biggest challenges', 'improved fitness', 'old people', 'a more equal world', 'connecting visionary companies', 'experiential learning', 'leadership', 'social innovation', 'digital disruption', 'leadership resilience', 'connectivity', 'change', 'a global coalition for peace', 'a more free world', 'the innovations of the future', 'humanity', 'us all', 'wellbeing', '21st century learning', 'radical efficiency'
]
//why doesn't this work? - check document ready at bottom
function questions(){
	$('#item').val("what is your name?");
	}

	
function getStory(array) {
	var random_position = Math.floor( Math.random() * array.length );
	var random_element = array[random_position];
	return random_element;
	console.log(random_element);
}

function getImpact(item) {
	var random_adjective = getStory(adjectives);
	var random_descriptor = getStory(descriptor);
	var random_first = getStory(firstAim);
	var random_cause = getStory(cause);
	var random_who =getStory(who);
	var random_cause2 = getStory(cause);
	var random_who2 =getStory(who);

	var name

	//this is the leading sentence
	$(document).bind('submit','#form' , function(e) {
		var name = $('#item').val();
		var years = $('#years').val();
			$('#items').html(name + ', the ' + random_adjective + ' ' + random_descriptor+ ', has spent the last ' + years+ ' years '+ random_first+'. ')
			$('#items2').html(name + ' is passionate about ' + random_cause + ' '+ random_who+ ' and'+ random_cause2+ ' '+ random_who2+ '.')
			$('#item').val("") 
			$('#item').focus()
			$('#years').val("") 
			$('#years').focus()



			e.preventDefault();
		});
	}
	
//JQuery method - wrapped to wait for page load
$(document).ready(getImpact())

$(document).ready(questions())



//How this works:
//1) user inputs name
//2) on keypress or mouseclick choose a random adjective from the array
//3) pull name from input box
//4) concatenate name + "is" + [random adjective from array]
//5) use .html() to display this on the screen

//Gender - use "they" and replace with "him" or "her"