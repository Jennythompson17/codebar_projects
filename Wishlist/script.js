/* Exercise 1: Wish list */


//var item = $('#item').val();
function addToList(item) {
	$(document).on('click','#add-to-list' , function() {
		$('ol#items').append("<li>"+$('#item').val()+"</li>")
		$('#item').val("") 
		$('#item').focus()
		});
	}


//JQuery method
//$(document).ready(addToList())
