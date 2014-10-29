

# python script to export the edges of an object to json
# Will only write xy coords, z is ignored


import bpy
import bmesh
import json

f = open('workfile', 'w')

me = bpy.context.object.data
bm = bmesh.new()
bm.from_mesh(me)

export_edges = []


for e in bm.edges:
	v1 = e.verts[0]
	v2 = e.verts[1]
	export_edge = []
	export_edge.append(v1.co[0])
	export_edge.append(v1.co[1])
	export_edge.append(v2.co[0])
	export_edge.append(v2.co[1])
	export_edges.append(export_edge)

json.dump(export_edges, f)
