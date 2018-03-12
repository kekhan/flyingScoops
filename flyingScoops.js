/*
    Ice creams scoops falling on a pile of icecream.
    there will be three big scops of ice cream at the bottom
    of the screen. 
    Need to make sure ice cream is the same color as
    the pile.
*/



//create variables to hold canvas tag

//create variables to hold the canvas tag
var image = new Image();
var urlscoops = "https://thumbs.dreamstime.com/b/scoops-ice-cream-15853409.jpg";
image.src = "https://media.istockphoto.com/photos/ice-cream-picture-id500545362?k=6&m=500545362&s=612x612&w=0&h=_RBr9mZ5XSXRuKR4OO0qwf2TQHRYwGB1SugXbdZNoMk=";
var cone = new Image();
cone.src = "https://www.webstaurantstore.com/images/products/extra_large/42980/455097.jpg";
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var start = false;
var icecream;
var cone;
var clickX = 0;
var clickY = 0;

// the sprite object
var srcWidth = 700;
var srcHeight = 500;
var col = 3;
var row = 2;
var currentFrame =0;
var trackleft = 1;
var trackright =0;

var spriteObject = {
	srcX:0,
	srcY:0,
	x:0,
	y:0,
	width: srcWidth/col,
	height: srcHeight/row,
}

// make the array for scoops
var scoops = [];
var chocolate = Object.create(spriteObject);
var strawberry = Object.create(spriteObject);
var vanilla = Object.create(spriteObject);

chocolate.srcX = (currentFrame+2%col) * chocolate.width;
chocolate.srcY = trackright* chocolate.height;
vanilla.srcX = (currentFrame+1%col)* vanilla.width;
vanilla.srcY = trackright * vanilla.height;
strawberry.srcX = (cuurentFrame+0 % col) * strawberry.width;
strawberry.srcY = spriteObject.trackright * strawberry.height;
scoops.push(chocolate);
scoops.push(vanilla);
scoops.push(strawberry);
console.log(scoops);

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
	cone = new Component(cone,500, canvas.height-100,100,100,'yellow',false,true);

	//}
	animate();

}

// create the sprites for scoops

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
			ctx = context;
			ctx.save();
			/*draw the scoop*/
			var angle = this.getAngle();
			context.save();
			// moves the square 
			ctx.translate(100, 500);
			
			ctx.rotate(angle);
			// having a fixed number for this.x keeps square fixed.
			ctx.drawImage(this.img,-30,-30,this.width,this.height);
			ctx.restore();
		}
		if(isCone){
			context.drawImage(this.img,this.x,this.y,this.width,this.height);
		}

	}

	this.getAngle = function(){
		var adjacent = clickX - this.x;
	    var opposite = clickY - this.y;
	    // by removing 180/Math.PI from angle, image rotates correctly
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
			//console.log("angle is", angle);
		}
		if(isCone){
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

console.log(scoops[0]);

// make game loop 
function animate(){
	//console.log(clickX);
	if(start == true){
		
		context.clearRect(0,0,canvas.width,canvas.height);
		icecream.update();
		cone.update();
		requestAnimationFrame(animate);
	}
	
}
