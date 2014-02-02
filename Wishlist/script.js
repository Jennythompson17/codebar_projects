/* Exercise 1: Wish list */


// Question for Codebar - how do I get the label on the same line?
function addToList(item) {
	$(document).on('click','#add-to-list' , function() {
		$('ol#items').append("<li>"+$('#item').val()+"</li>").append("<span class='label pending'>Pending</span>")
		$('#item').val("") 
		$('#item').focus()
		});
	}

function completeItem(item) {
	$(document).on('click', '.label', function() {
		$(this).attr("<span class='label success'>Done!</span>")
		$(".label.pending").remove()
		});
	}


//JQuery method - wrapped to wait for page load
$(document).ready(addToList())
$(document).ready(completeItem())
