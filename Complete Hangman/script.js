/** Hangman **/
function drawGallows(){
  //drawGallows();
	  context.moveTo(200,100);
	  context.lineTo(200,50);
	  context.lineTo(50,50);
	  context.lineTo(50,400);
	  context.stroke();

	  context.moveTo(300,400);
	  context.lineTo(0,400);
	  context.stroke();
	};

function drawHead(){
	//drawHead();
	  context.beginPath();
	  context.arc(200, 140, 40, 0, Math.PI*2, true);
	  context.closePath();
	  context.lineWidth = 4;
	  context.stroke();

	};

function drawBody(){
	  //drawBody();
	  context.beginPath();
	  context.moveTo(200,180);
	  context.lineTo(200,300);
	  context.stroke();
	  };

function drawRightHand(){
  //drawRightHand();
	  context.beginPath();
	  context.moveTo(200,200);
	  context.lineTo(250,250);
	  context.stroke();

	  };

function drawLeftHand(){
	  context.beginPath();
	  context.moveTo(200,200);
	  context.lineTo(150,250);
	  context.stroke();

	  };

function drawRightFoot(){
  context.beginPath();
  context.moveTo(200,300);
  context.lineTo(250,250+(Math.random()*100));
  context.stroke();

	  };


function drawLeftFoot(){
  context.beginPath();
  context.moveTo(200,300);
  context.lineTo(150,250+(Math.random()*100));
  context.stroke();

	  };






function update (data){
	$('.token').val(data.token);
	$('.hangman-word').text(data.hangman);
};

/** Hangman in Canvas **/
var canvas;
var context;

function draw(){

  //clearCanvas
  canvas.width = canvas.width;

  //setColor('#000000');
  context.strokeStyle = '#000000';

  //setLineWidth(20);
  context.lineWidth = "20";

  drawGallows();


  if($('.wrong').length == 1){
  	drawHead();
  };

  if($('.wrong').length == 2){
  	drawHead();
  	drawBody();
	
  };

  if($('.wrong').length == 3){
  	drawHead();
  	drawBody();
  	drawRightHand();
	
  };

  if($('.wrong').length == 4){
  	drawHead();
  	drawBody();
  	drawRightHand();
  	drawLeftHand();
	
  };

  if($('.wrong').length == 5){
  	drawHead();
  	drawBody();
  	drawRightHand();
  	drawLeftHand();
  	drawRightFoot();
	
  };

  if($('.wrong').length == 6){
  	drawHead();
  	drawBody();
  	drawRightHand();
  	drawLeftHand();
  	drawRightFoot();
  	drawLeftFoot();
	
  };

};

$(document).ready(function(){
  canvas = $('#hangmanGallows')[0];
  context = canvas.getContext("2d");

  setInterval(function() {
    draw();
  },200);


}


);

$(document).ready( function(){
	$('.console').hide();
	$('.remaining-guesses').hide();
	$('#new-game').click( function() {
		$.post("http://hangman-api.herokuapp.com/hangman").success(function( data ){ 
			$('#new-game').hide();
			$('.intro').hide();
			$('.console').show();
			$('.remaining-guesses').show();
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
			var wrongGuesses = $('.wrong').length;

			$('.remaining').text(6-wrongGuesses);

			if ($('.remaining').html() == 0 ) {

				$('.console').hide();
				update(data);

				$.ajax({
					type: 'get',
					url: 'http://hangman-api.herokuapp.com/hangman',
					data: { token: $('.token').val()}
				}).success(function( data ){ 
					update (data);

					$('.hangman-word').text(data.solution);
					$('#new-game').show();

					$('#new-game').click( function() {
						$('.console').show();
						$('.attempts').empty();
						$('.remaining').text(6);
						$('.letter').val("");
						});

					});


			};

		});

	});

});