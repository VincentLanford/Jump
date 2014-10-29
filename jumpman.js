
Jumpman = function()
{
	this.pos = [300, -300];
	this.vel = [0,0];
	this.jumping = false;
	this.airborne = false;
	this.running = false;
}

Jumpman.prototype.update = function()
{
	this.pos[0] += this.vel[0];
	this.pos[1] += this.vel[1];
	if(this.pos[1] < -300)
	{
		this.pos[1] = -300;
		this.airborne = false;
		this.jumping = false;
	}

	if(this.airborne)
	{
		this.fall();
	}
}

Jumpman.prototype.render = function()
{
	console.log("rendering")
	context.save();
	context.translate(this.pos[0], -this.pos[1]);
	context.drawImage(ASSETS.images["Jumpman"], 0, 0);
	context.restore();
}

Jumpman.prototype.jump = function()
{
	this.jumping = true;
	this.airborne = true;
	this.vel[1] = 15;
}


Jumpman.prototype.fall = function()
{
	this.vel[1] -= 1;
}

Jumpman.prototype.runLeft = function()
{
	this.vel[0] = -5;
	this.running = true;
}

Jumpman.prototype.runRight = function()
{
	this.vel[0] = 5;
	this.running = true;
}

Jumpman.prototype.stop = function()
{
	this.vel[0] = 0;
	this.running = false;
}

