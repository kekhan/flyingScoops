/*
    This game will be based on Angry Birds.
    I want to make a game that applies physics
    and math to shoot ice cream scoops accross 
    the screen. The ice cream scoops have to 
    hit a cone in order to get points. 
*/


<<<<<<< HEAD

//create variables to hold canvas tag
=======
//create variables to hold the canvas tag
>>>>>>> 508776a186a2a481d4738c5e30fd0372bf8f2d8d
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var start = false;

// start screen
function startGame(){
	var input = prompt("Enter yes to play");
	if(input === "yes"){
		start = true;
	}
	animate();

}

// create the arrays to hold scoops and cones
var scoops = [];
var cones =[];

// create nessary global variables
var Gravity = 9.8;

// make a components function for all the game's objects
function Component(){
	// make draw function to draw all components
	this.draw = function(){

	}
	// make update function to update component's movement
	this.update = function(){

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
	if(start){
		console.log("heloo");
		requestAnimationFrame(animate);
	}
	
}


