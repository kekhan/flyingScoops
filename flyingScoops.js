/*
    This game will be based on Angry Birds.
    I want to make a game that applies physics
    and math to shoot ice cream scoops accross 
    the screen. The ice cream scoops have to 
    hit a cone in order to get points. 
*/


//create variables to hold the canvas tag
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

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
	requestAnimationFrame(animate);
}

