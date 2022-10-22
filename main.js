canvas = new fabric.Canvas("myCanvas");

// Create canvas variable

//Set initial positions for ball and hole images.
by = 0;
bx = 0;
hy = 400;
hx = 800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromUrl("golf-h.png", function (Img){
	ho = Img;
	ho.scaleToWidth(50);
	ho.scaleToHeight(50);
	ho.set({
		top: hy,
		left: hx
	});
	canvas.add(ho);
	});
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Image) {
		bo = Img;
		bo.scaleToWidth(50);
		bo.scaleToHeight(50);
		bo.set({
			top: bo,
			left: bo
		});
		canvas.add(bo);
});
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((by == hy) && (by == hy)){
		canvas.remove(bo);
		document.getElementById("hd3").innerHTML = "You Have Hit the Goal!";
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(by >= 5){
			by = by - block_image_height;
			console.log("bih: " + block_image_height);
			console.log(bx, by);
			canvas.remove(bo);
			new_image();
		}
		// Write a code to move ball upward.
	}

	function down()
	{
		if(by <= 450){
			by = by + block_image_height;
			console.log("bih: " + block_image_height);
			console.log(bx + by);
			canvas.remove(bo);
			new_image();
		}
		// Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			bx = bx + block_image_height;
			console.log("bih: " + block_image_height);
			console.log(bx, by);
			canvas.remove(bo);
			new_image();
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			bx = bx - block_image_height;
			console.log("bih: " + block_image_height);
			console.log(bx, by);
			canvas.remove(bo);
			new_image();
			// Write a code to move ball right side.
		}
	}
	
}

