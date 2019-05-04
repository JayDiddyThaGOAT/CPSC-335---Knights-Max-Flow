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
    
    displayFlowAndCapacity()
    {
        var fontSize = 14;
        context.font = fontSize + "px Arial";
        context.fillStyle = "#FF0000";
        
        var offsetMag = context.lineWidth + fontSize;
        var offsetX = -offsetMag * (this.secondCell.i - this.firstCell.i);
        var offsetY = -offsetMag * (this.secondCell.j - this.secondCell.j);
        var midPointX = (this.firstCell.x + this.secondCell.x) / 2;
        var midPointY = (this.firstCell.y + this.secondCell.y) / 2;
        
        context.fillText(this.flow + "/" + this.capacity, midPointX - offsetX, midPointY - offsetY);
    }
}
