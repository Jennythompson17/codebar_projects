/* Exercise 1: Wish list */


//var item = $('#item').val();
function addToList(item) {
	$(document).on('click','#add-to-list' , function() {
		$('ol#items').append("<li>"+$('#item').val()+"</li>").append("<span class='label pending'>Pending</span>")
		$('#item').val("") 
		$('#item').focus()
		});
	}


//JQuery method - wrapped to wait for page load
$(document).ready(addToList())
