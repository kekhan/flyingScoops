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
var srcWidth = 800;
var srcHeight = 500;
var col = 3;
var row = 2;
var currentFrame = 0;
var trackleft = 1;
var trackright =0;


var spriteObject = {
	srcX:0,
	srcY:0,
	flavor:"",
	x:0,
	y:0,
	width: srcWidth/col,
	height: srcHeight/row,
	velocityY:0,
	velocityX:0,
}

// make the array for scoops
var scoops = [];
var chocolate = Object.create(spriteObject);
var strawberry = Object.create(spriteObject);
var vanilla = Object.create(spriteObject);
strawberry.x = 510;
chocolate.x = 100;
chocolate.y = 500;
vanilla.x =510;
vanilla.flavor = "vanilla";
chocolate.flavor = "chocolate";
strawberry.flavor = "strawberry";

//chocolate.y = 50;
strawberry.y = 100;
vanilla.y = canvas.height-158;

chocolate.srcX = (currentFrame+2%col) * chocolate.width;
chocolate.srcY = trackright * chocolate.height;
vanilla.srcX = (currentFrame+1%col)* vanilla.width;
vanilla.srcY = trackright * vanilla.height;
strawberry.srcX = (currentFrame+0 % col) * strawberry.width;
strawberry.srcY = trackright * strawberry.height;
scoops.push(chocolate);
scoops.push(vanilla);
scoops.push(strawberry);

var scoopImage = new Image();
scoopImage.src = urlscoops;

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
	this.dy = 0;
	this.dx = 0;
	this.gravity = (-0.07);
	this.gravitySpeed = 0;
	this.color = color;
	this.width = width;
	this.height = height;
	var rotation = 0;
	var num = Math.floor(Math.random() * 3)
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
			// draw the ice cream scoop
			for(var i =0; i<scoops.length;i++){
			num = Math.floor(Math.random() * 3)
			//console.log(num);
			var scoop = scoops[0];
			context.drawImage(scoopImage,scoop.srcX,scoop.srcY,scoop.width,scoop.height,scoop.x,
				scoop.y,scoop.width/3,scoop.height/3);
		}
			this.draw();
			var angle = this.getAngle()
			if(chocolate.y + chocolate.height/3 > canvas.height ){
			chocolate.y = chocolate.y;
			chocolate.x = chocolate.x;

		}
		    else if(chocolate.y + chocolate.height/3 < canvas.height ){
			this.gravitySpeed += this.gravity;
			chocolate.y += Math.sin(-angle)*5 - this.gravitySpeed;
			chocolate.x += 2;
			console.log(chocolate.y);
		}
			
		}
		if(isCone){
			// draw the icecream cone
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
		//strawberry.y+=1;
		requestAnimationFrame(animate);
	}
	
}
