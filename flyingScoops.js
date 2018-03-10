/*
    This game will be based on Angry Birds.
    I want to make a game that applies physics
    and math to shoot ice cream scoops accross 
    the screen. The ice cream scoops have to 
    hit a cone in order to get points. 
*/



//create variables to hold canvas tag

//create variables to hold the canvas tag
var image = new Image();
image.src = "https://media.istockphoto.com/photos/ice-cream-picture-id500545362?k=6&m=500545362&s=612x612&w=0&h=_RBr9mZ5XSXRuKR4OO0qwf2TQHRYwGB1SugXbdZNoMk=";
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
	clickX = event.clientX ;
	clickY = event.clientY;
})

// start screen
function startGame(){
	//var input = prompt("Enter y to play");
	//if(input === "y" || input =="Y"){
	start = true;
	icecream = new Component(image,50,canvas.height-100,100,100,'blue',true,false);

	//}
	animate();

}

// create the arrays to hold scoops and cones
var scoops = [];
var cones =[];

// create nessary global variables
var Gravity = 9.8;

// make a components function for all the game's objects
function Component(img,x,y,width,height,color,isScoop,isCone){
	// declare variable for this
	this.x = x;
	this.img = img;
	this.y = y;
	this.color = color;
	this.width = width;
	this.height = height;
	var rotation = 0;
	// make draw function to draw all components
	this.draw = function(){
		if(isScoop){
			//context.clearRect(0, 0, canvas.width, canvas.height);
			ctx = context;
			ctx.save();

			/*draw the scoop*/
			var angle = this.getAngle();
			
			context.save();

			// moves the square 
			ctx.translate(this.x, this.y);
			
			ctx.rotate(angle);
			//ctx.translate(-canvas.width/2, -canvas.width/2);
			
			//ctx.fillStyle = this.color;
			// having a fixed number for this.x keeps square fixed.
			ctx.drawImage(this.img,-30,-30,this.width,this.height);
			ctx.restore();
		}

	}
	this.getAngle = function(){
		var adjacent = clickX - this.x;
	    var opposite = clickY - this.y;
	    var angle = Math.atan2(opposite,adjacent);
	    return Math.abs(angle);
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
	console.log(clickX);
	if(start == true){
		//context.clearRect(0,0,canvas.width,canvas.height);
		requestAnimationFrame(animate);
		context.clearRect(0,0,canvas.width,canvas.height);
		icecream.update();
		//icecream.rotate(Math.atan2(3, -4) * (180 / Math.PI));
	}
	
}


