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

// start screen
function startGame(){
	//var input = prompt("Enter y to play");
	//if(input === "y" || input =="Y"){
	start = true;
	icecream = new Component(100,100,100,100,'blue',true,false);

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
	this.dx = 1;
	this.dy = 1;
	var posx = 20;
	var posy = 20;
	this.angle = Math.atan2(posy-this.y,posx-this.x) * 180 /Math.PI;
	var rotation = 0;


	// make draw function to draw all components
	this.draw = function(){
		if(isScoop){
			/*draw the scoop*/
			
			context.fillStyle = this.color;
			context.fillRect(this.x,this.y,this.width,this.height);
			context.rotate(this.angle);
			



		}

	}
	// make update function to update component's movement
	this.update = function(){
		if(isScoop){
			/* gets position of mouse and posision of scoop*/
			//this.rotation(this.angle);
			//rotate(this.angle);
			//this.rotate(sprite.rotation * Math.PI / 180);

			this.draw();
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
		requestAnimationFrame(animate);
		context.clearRect(0,0,canvas.width,canvas.height);
		icecream.update();
		//icecream.rotate(Math.atan2(3, -4) * (180 / Math.PI));
	}
	
}


