/* Widget for Thom */

//Questions
//1) how do I attach a re-load event handler to thesubmit button for submissions after the first one?
//2) How do I mak sure that random doesn't choose the same adverb?
//3) how do I handle a re-submit where the input boxes are empty?


var adjectives = ['lean', 'agile', 'innovative', 'disruptive', 'impactful', 'cutting-edge', 'sustainable', 'avid', 'adaptive', 'nimble', 'practical', 'accessible', 'people-centred', 'talented', 'supportive', 'authentic', 'fearless', 'excited', 'diverse', 'open', 'digital', 'experimental', 'dedicated', 'progressive', 'visionary', 'world-class', 'iconic', 'resilient', 'inspirational', 'credible', 'evidenced', 'immense', 'creative','sudden'];
var descriptor = [ 'adventurer', 'individual', 'communicator', 'public speaker', 'event planning genius', 'genius', 'designer', 'social designer', 'facilitator', 'logistics and numbers ninja', 'expert', 'social expert', 'guru', 'venture hunter', 'contrarian communicator', 'instigator', 'grassroots volunteer', 'world roamer', 'pop-up restaurateur', 'campaigner', 'connector', 'changemaker', 'digital change agent', 'early interventionist', 'social intrapreneur', 'lover of life']
var firstAim = ['exciting people-driven startups', 'making a difference in the world', 'growing a stronger society', 'solving society\'s intractable problems',  'sussing out better answers to our biggest challenges',  'connecting visionary companies', 'devising experiential learning','running towards a goal most call impossible', 'toiling in the service of a common good', 'fusing talent with technology', 'making a difference in the world', 'creating new movements', 'crafting institutions and companies', 'inspiring organisations across business and society'];
var cause =[ 'our global mission to improve', 'our working together for', 'the building of partnerships with', 'the turning of inventions into marketable applications for', 'the improvement of the innovative capacity of' ]
var who =['people', 'public services', 'the user experience', 'everyone\'s health',  'the future', 'children', 'young people', 'information', 'the information age', 'the obesity epidemic', 'women', 'men', 'young men', 'young women','improved fitness', 'old people', 'a more equal world','commercial cultural and social potential','equal access to education for all', 'improving outcomes', 'a hub for innovators the world over']
var cause2 =['the development of practical insights in the service of', 'the deep connection with amazing people who are impassioned about', 'the potential to harness the talents and skills of diverse people for' ]
var adverb =['creatively', 'impactfully', 'passionately', 'nimbly', 'supportively', 'swiftly', 'accessibly', 'progressively', 'excitedly', 'inspirationally', 'digitally', 'compellingly', 'actively', 'keenly']
var verb =[ 'innovates', 'creates', 'co-creates', 'co-produces', 'disrupts', 'supports', 'improves', 'sustains', 'grows', 'scales', 'replicates', 'designs', 'fosters']
var noun = ['talent', 'skill', 'power', 'inventiveness', 'commitment', 'passion', 'love', 'flair']
var verb2 = ['incubating', 'discovering', 'actualising','nurturing', 'accelerating', 'amplifying']
var secondAim = ['ultimate impact', 'undeniable impact', 'total social impact', 'true impact', 'Impact, social impact', 'positive social impact', 'massive impact', 'long-term impact']
var adjectives2 = ['startling', 'compelling', 'hard-hitting', 'fruitful', 'awe-inspiring']
var epiphany = ['pretotyping is at the heart of real innovation', 'we need to access the strengths of civil society', 'we must define the brief and design the solution', 'we must collaborate and develop our leaderships', 'we are bound by a shared humanity we have the power to shape', 'the massive global challenge requires us to be creative in our thinking']


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
	var random_cause2 = getStory(cause2);
	var random_who2 =getStory(who);
	var random_adverb = getStory(adverb);
	var random_verb = getStory(verb);
	var random_cause3 = getStory(cause);
	var random_who3 =getStory(who);
	var random_noun = getStory(noun);
	var random_verb2 = getStory(verb2);
	var random_second = getStory(secondAim);
	var random_adjective2 = getStory(adjectives2);
	var random_epiphany = getStory(epiphany);


	//this is the leading sentence
	$(document).bind('submit','#form' , function(e) {
		var name = $('#item').val();
		var years = $('#years').val();
			$('#items').html(name + ', the ' + random_adjective + ' ' + random_descriptor+ ', has spent the last ' + years+ ' years '+ random_first+'. ')
			$('#items2').html(name + ' is passionate about ' + random_cause + ' '+ random_who+ ' and '+ random_cause2+ ' '+ random_who2+ '. '+ name + ' '+ random_adverb + ' '+ random_verb + ' '+random_cause3+ ' '+ random_who3 + '.')
			$('#items3').html(name + '\'s '+ random_noun+ ' for '+ random_verb2 + ' '+ random_second + ' has led to the ' +  random_adjective2 + ' realisation that ' + random_epiphany+ '.')			
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