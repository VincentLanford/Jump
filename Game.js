
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
	
	document.documentElement.addEventListener('keydown', keyDown, false);
	document.documentElement.addEventListener('keyup', keyUp, false);

	requestAnimationFrame(frame);

}

function Game()
{
	this.Jumpman = new Jumpman();
	this.K = new Keyboard();
	this.S = new Scene("CloudScene");
	this.BS = new Scene("BrickScene");
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
	G.S.render();
	G.BS.render();
	G.Jumpman.render();
}

function keyControls()
{
	if(G.K.up)
	{
		G.Jumpman.jump();
	}
	if(G.K.left)
	{
		G.Jumpman.runLeft();
	}
	if(G.K.right)
	{
		G.Jumpman.runRight();
	}
	if(!(G.K.right || G.K.left))
	{
		G.Jumpman.stop();
	}
}

function keyDown(event)
{
	if(event.keyCode == 38)
	{
		G.K.up = true;
	}
	if(event.keyCode == 39)
	{
		G.K.right = true;
	}
	if(event.keyCode == 37)
	{
		G.K.left = true;
	}
}

function keyUp(event)
{
	if(event.keyCode == 38)
	{
		G.K.up = false;
	}
	if(event.keyCode == 39)
	{
		G.K.right = false;
	}
	if(event.keyCode == 37)
	{
		G.K.left = false;
	}
}

start();