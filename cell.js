class Cell
{
	constructor(i, j)
	{
		this.i = i;
		this.j = j;
		
		this.x = 80 * i + 40;
		this.y = 80 * j + 40;
        
        this.capacity = Math.floor(Math.random() * 31 / 2) * 2;
	}
}