/*
    This game will be based on Angry Birds.
    I want to make a game that applies physics
    and math to shoot ice cream scoops accross 
    the screen. The ice cream scoops have to 
    hit a cone in order to get points. 
*/



//create variables to hold canvas tag

//create variables to hold the canvas tag

var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var start = false;
var icecream;
var clickX = 0;
var clickY = 0;

// add event listeners
window.addEventListener('click', function(event){
	clickX = event.clientX;
	clickY = event.clientY
})

// start screen
function startGame(){
	//var input = prompt("Enter y to play");
	//if(input === "y" || input =="Y"){
	start = true;
	icecream = new Component(50,canvas.height-100,10,100,'blue',true,false);

	//}
	animate();

}

// create the arrays to hold scoops and cones
var scoops = [];
var cones =[];

// create nessary global variables
var Gravity = 9.8;

// make a components function for all the game's objects
function Component(x,y,width,height,color,isScoop,isCone){
	// declare variable for this
	this.x = x;
	this.y = y;
	this.color = color;
	this.width = width;
	this.height = height;
	var rotation = 0;
	// make draw function to draw all components
	this.draw = function(){
		if(isScoop){
			/*draw the scoop*/
			var angle = this.getAngle();
			
			//context.clearRect(0,0,canvas.width,canvas.height);
			context.translate(canvas.width/2, canvas.width/2);
			context.fillStyle = this.color;
			context.fillRect(this.x,this.y,this.width,this.height);
			context.rotate(angle);

			



		}

	}
	this.getAngle = function(){
		var opposite = clickY - this.y;
	    var adjacent = clickX - this.x;
	    var angle = Math.atan2(opposite,adjacent)*180/Math.PI;
	    return angle;
	}
	// make update function to update component's movement
	this.update = function(){
		if(isScoop){
			/* gets position of mouse and posision of scoop*/
			//console.log(clickX);
			this.draw();
			var angle = this.getAngle()
			console.log("angle is", angle);
		}




	}
	// make collision function to dettect collisions of scoops with cones
	this.collision = function() {
		// body...
	}

	// make sound function to trigger a sound of icecream scoop being thrown
	// and colliding with cone
	this.sound = function(){

	}
}

// make the game loop to call
function animate(){
	if(start == true){
		//context.clearRect(0,0,canvas.width,canvas.height);
		requestAnimationFrame(animate);
		context.clearRect(0,0,canvas.width,canvas.height);
		icecream.update();
		//icecream.rotate(Math.atan2(3, -4) * (180 / Math.PI));
	}
	
}


