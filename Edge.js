class Edge
{
	constructor(firstCell, secondCell)
	{
		this.firstCell = firstCell;
		this.secondCell = secondCell;
        
        this.flow;
        this.capacity = (firstCell.capacity + secondCell.capacity ) / 2;
	}
	
	displayCapacity()
	{
		console.log("Capacity = " + capacity);
	}
	 
	placeEdge()
	{
		console.log("Placing edge from (" + this.firstCell.i + ", " + this.firstCell.j + ") to (" + this.secondCell.i + ", " + this.secondCell.j + ")");
		draw_line(context, this.firstCell, this.secondCell);
		if (!(this.firstCell === source || this.firstCell === sink))
		{
			draw_dot(context, this.firstCell.x, this.firstCell.y);
		}
    
		if (!(this.secondCell === source || this.secondCell === sink))
		{
			draw_dot(context, this.secondCell.x, this.secondCell.y);
		}
	}
}
