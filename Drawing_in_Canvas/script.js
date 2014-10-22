/** Canvas playground for Codebar's tutorial Drawing in Canvas **/

function draw() {
 var canvas = document.getElementById('canvas-id');
 var context = canvas.getContext("2d");
 	
// rect 1
 	context.strokeStyle = "purple";
 	context.lineWidth = "3";
 	context.fillStyle = "yellow";
	context.fillRect(100, 100, 100, 100);
	context.strokeRect(100, 100, 100, 100);

// rect 2
	context.strokeStyle = "purple";
 	context.lineWidth = "1";
	context.strokeRect(250, 100, 50, 100);

// rect 3
	context.strokeStyle = "purple";
 	context.lineWidth = "1";
	context.strokeRect(280, 350, 120, 150);

//draw paths
 // 	context.moveTo(0,300);
	// context.lineTo(400,500);
	// context.stroke();

//draw rectangle
	context.beginPath();

	context.lineWidth = 1;
	context.strokeStyle = "green";

	setTimeout(function(){
		context.moveTo(0,0);
		context.lineTo(0,200);
		context.stroke();
	},1200);

	setTimeout(function(){
		context.lineTo(200,200);
		context.stroke();
	},2400);

	setTimeout(function(){
		context.lineTo(200,0);
		context.stroke();
	},3600);

	setTimeout(function(){
		context.lineTo(0,0);
		context.stroke();
	},4800);


// draw circle
	
	context.save();
	context.scale(2,2);
	

	context.beginPath();
	context.arc(200, 100, 50, 0, Math.PI*2, true);
	context.closePath();
	context.lineWidth = 4;
	context.stroke();

	context.fillStyle = "blue";
	context.fill();

	context.restore();

	// context.save();
	// context.rotate(10*Math.PI/180);
	// context.restore();

	// context.translate(45, 45);



};

function reset() {
  var canvas = document.getElementById('canvas-id');
  var context = canvas.getContext("2d");
  	canvas.width = canvas.width;

  // reset canvas
}
