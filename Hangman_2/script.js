/** Hangman in Canvas **/
var canvas;
var context;

function draw(){
  console.log("Drawing Hangman");

  //clearCanvas
  canvas.width = canvas.width;

  //setColor('#000000');
  context.strokeStyle = '#000000';

  //setLineWidth(20);
  context.lineWidth = "20";

  //drawGallows();
  context.moveTo(200,100);
  context.lineTo(200,50);
  context.lineTo(50,50);
  context.lineTo(50,400);
  context.stroke();

  context.moveTo(300,400);
  context.lineTo(0,400);
  context.stroke();

  //drawHead();
  context.beginPath();
  context.arc(200, 140, 40, 0, Math.PI*2, true);
  context.closePath();
  context.lineWidth = 4;
  context.stroke();

  //drawBody();
  context.beginPath();
  context.moveTo(200,180);
  context.lineTo(200,300);
  context.stroke();

  //drawRightHand();
  context.beginPath();
  context.moveTo(200,200);
  context.lineTo(250,250);
  context.stroke();

  //drawLeftHand();
  context.beginPath();
  context.moveTo(200,200);
  context.lineTo(150,250);
  context.stroke();

  //drawRightFoot();
  context.beginPath();
  context.moveTo(200,300);
  context.lineTo(250,250+(Math.random()*100));
  context.stroke();

  //drawLeftFoot();
  context.beginPath();
  context.moveTo(200,300);
  context.lineTo(150,250+(Math.random()*100));
  context.stroke();

};

$(document).ready(function(){
  canvas = $('#hangman')[0];
  context = canvas.getContext("2d");

  setInterval(function() {
    draw();
  },200);


}


);
