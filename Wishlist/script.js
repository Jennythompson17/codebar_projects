/* Exercise 1: Wish list */


// Question for Codebar - how do I get the label on the same line?
function addToList(item) {
	$(document).on('click','#add-to-list' , function() {
		$('ol#items').append("<li>"+$('#item').val()+"</li>").append("<span class='label pending'>Pending</span>")
		$('#item').val("") 
		$('#item').focus()
		});
	}

//Question: why am I getting nested labels and how do I remove the pending one?
function completeItem(item) {
	$(document).on('click', '.label', function() {
		$(".label.pending").attr(".label.success")
		$(this).append("<span class='label success'>Done!</span>")
		});
	}


//JQuery method - wrapped to wait for page load
$(document).ready(addToList())
$(document).ready(completeItem())
