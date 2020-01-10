CPSC 335-04
Project 3: Knights Max Flow
Team: JVJ = Jalen Jackson, Victoria Tran, Justin Castillo

Intro:  This project essentially creates a flow graph from a specified source and sink. We attempted to follow the Karp-Edmond algorithm in which we performed a Breadth-First Search in our 10x10 graph to discover an augmented path between the source and the sink. Consequently, we caluclated the edges' capacities and the overall max flow of the graph.

Contents: cell.js, edge.js, index.html, draw-stuff.js, style.css, Readme.txt, sampleInvocation.png, Standup.docx

Setup and Installation: Gmail blocked us from sending a JS file. Nevertheless, here is the necessary steps to setup our project.
			-In 335-p1_JVJ folder, open  assets folder
			-Open draw-stuff.txt
			-Go to 'File' -> 'Save as' 
			-Rename file to draw-stuff.js *AND* change 'Save as type' to "All files"
			-Save

Sample invocation: Attatched in the files

Features: This program creates a 10x10 graph that has a specified location for the source and the sink. It then creates a path from the source to the sink and calculates the max flow and the number of unused edges. 

Bugs:
