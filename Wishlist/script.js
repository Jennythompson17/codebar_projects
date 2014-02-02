/* Exercise 1: Wish list */


//var item = $('#item').val();
function addToList(item) {
	$(document).on('click','#add-to-list' , function() {
		$('ol#items').append("<li>"+$('#item').val()+"</li>").append("<span class='label pending'>Pending</span>")
		$(this).on('click', '.label pending', function() {
			$(this).addClass('complete')
			$(this).append("<span class='label success'>Done!</span>")
			}
		$('#item').val("") 
		$('#item').focus()
		});
	}

//function completeItem(item) {
	$(document).on('click', '.label pending', function() {
		$(this).addClass('.complete');
		$(this).append("<span class='label success'>Done!</span>");
		});
	}


//JQuery method - wrapped to wait for page load
$(document).ready(addToList())
//$(document).ready(completeItem())
