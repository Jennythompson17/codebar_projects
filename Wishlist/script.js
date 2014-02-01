/* Exercise 1: Wish list */

//revising Lesson 2

//function listDomElements() {
  //var children = document.body.childNodes;
  //for(var i=0; i <  children.length; i++) {
    //console.log(children[i]);
  //}
//}



function add() {
	$('#items').append($('input').val()) 
}


function addToList(item) {
	$(document).on('click',"#add-to-list" , add(item)  )
	}

$(document).ready(addToList())


$('input').val("wish 1");

$('#items').append("<div>Wish 1</div>")

//$('#items').append("<li>Thing One</li>")