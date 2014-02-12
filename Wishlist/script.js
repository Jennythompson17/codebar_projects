/* Exercise 1: Wish list */



function addToList(item) {
	$(document).on('click','#add-to-list' , function() {
		$('ol#items').append("<span class='label pending'>Pending</span>").append("<li>"+$('#item').val()+"</li>")
		$('#item').val("") 
		$('#item').focus()
		});

	$(document).on('keypress', function(e) {
    		if(e.which == 13) {
				$('ol#items').append("<span class='label pending'>Pending</span>").append("<li>"+$('#item').val()+"</li>")
				$('#item').val("") 
				$('#item').focus()
				}
			});
	}


function completeItem(item) {
	$(document).on('click', '.label', function() {
		$(this).addClass("success").removeClass("pending")
		$(this).text("Done!")
		updateTotal()
		});
	}


function updateTotal() {
	if ($('.listTotal').length == 0 ) {
		$('ol#items').append("<div class='listTotal'></div>")
	}
	$('.listTotal').text("Completed : " + $('.success').length + "   Pending : " + $('.pending').length)
}



//I want to create a div
//I want to put text + count inside
//I want to append that underneath my list




//JQuery method - wrapped to wait for page load
$(document).ready(addToList())
$(document).ready(completeItem())
$(document).ready(updateTotal())
