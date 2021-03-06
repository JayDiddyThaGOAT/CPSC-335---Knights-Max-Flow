class Cell
{
	constructor(i, j)
	{
		this.i = i;
		this.j = j;
		
		this.x = 80 * i + 40;
		this.y = 80 * j + 40;
        
        this.flow = 0;
        this.capacity = Math.floor(Math.random() * 31 / 2) * 2;
        this.marked = false;
		this.seen = false;
	}
    
    getNeighborsFrom(cells)
    {
        var neighbors = [];
        
        var i = this.i + 2;
        var j = this.j + 1;
        if (i >= 0 && i < 10 && j >= 0 && j < 10)
        {
            var cell = cells.find(function(element){
                return element.i == i && element.j == j;
            });
            
            if (cell != null && cell.marked == false)
                neighbors.push(cell);
        }
        
        i = this.i - 2;
        j = this.j - 1;
        if (i >= 0 && i < 10 && j >= 0 && j < 10)
        {
            var cell = cells.find(function(element){
                return element.i == i && element.j == j;
            });
            
            if (cell != null && cell.marked == false)
                neighbors.push(cell);
        }
        
        i = this.i + 2;
        j = this.j - 1;
        if (i >= 0 && i < 10 && j >= 0 && j < 10)
        {
            var cell = cells.find(function(element){
                return element.i == i && element.j == j;
            });
            
            if (cell != null && cell.marked == false)
                neighbors.push(cell);
        }
        
        i = this.i - 2;
        j = this.j + 1;
        if (i >= 0 && i < 10 && j >= 0 && j < 10)
        {
            var cell = cells.find(function(element){
                return element.i == i && element.j == j;
            });
            
            if (cell != null && cell.marked == false)
                neighbors.push(cell);
        }
        
        
        i = this.i + 1;
        j = this.j + 2;
        if (i >= 0 && i < 10 && j >= 0 && j < 10)
        {
            var cell = cells.find(function(element){
                return element.i == i && element.j == j;
            });
            
            if (cell != null && cell.marked == false)
                neighbors.push(cell);
        }
        
        i = this.i - 1;
        j = this.j - 2;
        if (i >= 0 && i < 10 && j >= 0 && j < 10)
        {
            var cell = cells.find(function(element){
                return element.i == i && element.j == j;
            });
            
            if (cell != null && cell.marked == false)
                neighbors.push(cell);
        }
        
        i = this.i + 1;
        j = this.j - 2;
        if (i >= 0 && i < 10 && j >= 0 && j < 10)
        {
            var cell = cells.find(function(element){
                return element.i == i && element.j == j;
            });
            
            if (cell != null && cell.marked == false)
                neighbors.push(cell);
        }
        
        i = this.i - 1;
        j = this.j + 2;
        if (i >= 0 && i < 10 && j >= 0 && j < 10)
        {
            var cell = cells.find(function(element){
                return element.i == i && element.j == j;
            });
            
            if (cell != null && cell.marked == false)
                neighbors.push(cell);
        }
        
        return neighbors;
    }
	
	printCell()
	{
			return (" (" + this.i + ", " + this.j + ") ");
	}
}
