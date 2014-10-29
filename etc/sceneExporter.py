
# Exports a scene in blender to json
# Again, it only exports in 2D
# exports the XY coords of each object
# and their Z rotation
# Maybe scale too. Probably. Why not?
# Make sure there's nothing in the scene except the objects you want


import bpy
import json

f = open('workfile2', 'w')

export_objs = [];

for obj in bpy.data.objects:
	export_obj = {"loc" : [], "rot" : 0, "scale" : [], "name" : ""}
	export_obj["loc"].append(obj.location[0])
	export_obj["loc"].append(obj.location[1])
	export_obj["rot"] = obj.rotation_euler.z
	export_obj["scale"].append(obj.scale[0])
	export_obj["scale"].append(obj.scale[1])
	export_obj["name"] = obj["nameProp"]
	export_objs.append(export_obj)

json.dump(export_objs, f)

	