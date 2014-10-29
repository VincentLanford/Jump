

function Scene(name)
{
	this.description = ASSETS.json[name];
}

Scene.prototype.render = function()
{
	console.log(this.description)
	
	var sprite = {};
	for(var i = 0; i < this.description.length; i++)
	{
		sprite = this.description[i];
		console.log(sprite)
		context.save();
		context.translate(sprite.loc[0] * 100 + 300, -sprite.loc[1] * 100 + 300);
		context.drawImage(ASSETS.images[sprite.name], 0, 0);
		context.restore();

	}
}