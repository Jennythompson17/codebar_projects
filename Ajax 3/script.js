/** Hangman **/

//
function update (data){
	$('.token').val(data.token);
	$('.hangman-word').text(data.hangman);
};


$(document).ready( function(){
	$('#new-game').click( function() {
		$.post("http://hangman-api.herokuapp.com/hangman").success(function( data ){ 
			$('#new-game').hide();
			update (data);
		});

	});

	$('#guess').click( function() {
		var letter =$('.letter').val();
		$.ajax({
			type: 'put',
			url: 'http://hangman-api.herokuapp.com/hangman',
			data: { token: $('.token').val(), letter: letter },
		}).success(function( data ){ 
			console.log(data);
			update(data);
			if (!data.correct) {
				$('.attempts').append($('<span class="wrong"/>').text(letter));
				}
			else{
				$('.attempts').append($('<span/>').text(letter));
			}
			var wrongGuesses = $('.wrong').length+1;

			$('.remaining').text(7-wrongGuesses);

			if ($('.remaining').html() == 6 ) {
				$('.console').hide();
				update(data);
				$.ajax({
					type: 'get',
					url: 'http://hangman-api.herokuapp.com/hangman',
					data: { token: $('.token').val()}
				}).success(function( data ){ 
					update (data);
					console.log(data.solution);
				});

			};

		});

	});

});