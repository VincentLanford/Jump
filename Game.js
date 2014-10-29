
var canvas;
var context;
var G;


function start()
{
	ASSETS = loadAssets("assets.json", init);
}


function init()
{
	canvas = document.getElementById("MainCanvas");
	context = canvas.getContext('2d');

	G = new Game();
	K = new Keyboard();
	S = new Scene("CloudScene");
	
	document.documentElement.addEventListener('keydown', keyDown, false);
	document.documentElement.addEventListener('keyup', keyUp, false);

	requestAnimationFrame(frame);

}

function Game()
{
	this.Jumpman = new Jumpman();
}

function frame()
{
	update();
	render();
	requestAnimationFrame(frame);

}

function update()
{
	keyControls();
	G.Jumpman.update();
}

function render()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	S.render();
	// G.Jumpman.render();
}

function keyControls()
{
	if(K.up)
	{
		G.Jumpman.jump();
	}
	if(K.left)
	{
		G.Jumpman.runLeft();
	}
	if(K.right)
	{
		G.Jumpman.runRight();
	}
	if(!(K.right || K.left))
	{
		G.Jumpman.stop();
	}
}

function keyDown(event)
{
	if(event.keyCode == 38)
	{
		K.up = true;
	}
	if(event.keyCode == 39)
	{
		K.right = true;
	}
	if(event.keyCode == 37)
	{
		K.left = true;
	}
}

function keyUp(event)
{
	if(event.keyCode == 38)
	{
		K.up = false;
	}
	if(event.keyCode == 39)
	{
		K.right = false;
	}
	if(event.keyCode == 37)
	{
		K.left = false;
	}
}

start();