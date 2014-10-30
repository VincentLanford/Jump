
Jumpman = function()
{
	this.pos = [300, 300];
	this.vel = [0,0];
	this.jumping = false;
	this.airborne = false;
	this.running = false;

	this.HalfWidth = ASSETS.json.Jumpman.HalfWidth;
	this.Height = ASSETS.json.Jumpman.Height;
	console.log(this.HalfWidth);
	console.log(this.Height);
}

Jumpman.prototype.update = function()
{
	this.pos[0] += this.vel[0];
	this.pos[1] += this.vel[1];
	if(this.checkGround())
	{
		this.land();
	}
	else
	{
		this.fall();
	}
}

Jumpman.prototype.checkGround = function()
{
	var ground = this.findGround();
	if(ground === false)
	{
		return false;
	}
	else if(this.pos[1] < ground)
	{
		return false;
	}
	else if(this.pos[1] > ground)
	{
		return true;
	}

}

Jumpman.prototype.findGround = function()
{
	// return this.pos[1] < -300;
	var Brick = {};
	for(var i = 0; i < G.BS.description.length; i++)
	{
		Brick = G.BS.description[i];
		// console.log(this.pos[0], Brick.loc[0])
		if(this.pos[0] > Brick.loc[0] - this.HalfWidth && this.pos[0] < Brick.loc[0] + 60 + this.HalfWidth)
		{
			return Brick.loc[1];
		}
	}
	return false;
}

Jumpman.prototype.land = function()
{
	this.pos[1] = this.findGround();
	this.vel[1] = 0;
	this.airborne = false;
	this.jumping = false;
}

Jumpman.prototype.render = function()
{
	context.save();
	context.translate(this.pos[0], this.pos[1]);
	context.rotate(-0.22);
	// console.log(this);
	context.translate(-this.HalfWidth, -this.Height);
	context.drawImage(ASSETS.images["Jumpman"], 0, 0);
	context.restore();
}

Jumpman.prototype.jump = function()
{
	if(!this.airborne)
	{
		this.jumping = true;
		this.airborne = true;
		this.vel[1] = -15;
	}
}


Jumpman.prototype.fall = function()
{
	this.vel[1] += 1;
}

Jumpman.prototype.runLeft = function()
{
	if(!this.airborne)
	{
		this.vel[0] -= ASSETS.json.Jumpman.RunAccel;
		if(this.vel[0] < -ASSETS.json.Jumpman.MaxSpeed )
			this.vel[0] = -ASSETS.json.Jumpman.MaxSpeed;
		this.running = true;
	}
}

Jumpman.prototype.runRight = function()
{
	if(!this.airborne)
	{
		this.vel[0] += ASSETS.json.Jumpman.RunAccel;
		if(this.vel[0] > ASSETS.json.Jumpman.MaxSpeed )
			this.vel[0] = ASSETS.json.Jumpman.MaxSpeed;
		this.running = true;
	}
}

Jumpman.prototype.stop = function()
{
	if(!this.airborne)
	{
		if(this.vel[0] > 0)
		{
			this.vel[0] -= ASSETS.json.Jumpman.RunAccel;
			if(this.vel[0] < 0)
				this.vel[0] = 0;
		}
		else if(this.vel[0] < 0)
		{
			this.vel[0] += ASSETS.json.Jumpman.RunAccel;
			if(this.vel[0] > 0)
				this.vel[0] = 0;
		}
		this.running = false;
	}
}

