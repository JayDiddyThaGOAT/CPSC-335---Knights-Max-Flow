// Draw stuff
// Time-stamp: <2019-04-20 8:00AM JVJ>
// ------------------------------------------------------------

// FUN. Draw filled rect.
function draw_rect(ctx, x, y, fill)
{
	x = x || 0;
	y = y || 0;
    fill = fill || "white";
    ctx.save( );
    ctx.fillStyle = fill;
    ctx.rect(x * 10, y * 10, 10, 10);
    ctx.fill();
    ctx.restore( );
}

function draw_dot(ctx, x, y, fill)
{
	fill = fill || "black";
	ctx.save();
	ctx.fillStyle = fill;
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, 2 * Math.PI);
	ctx.fill();
}

function draw_redDot(ctx, x, y, fill)
{ 
	fill = fill || "red";
	ctx.save();
	ctx.fillStyle = fill;
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, 2 * Math.PI);
	ctx.fill();
}

function draw_values(ctx, x, y, txt, fill)
{
    fill = fill || "black";
    ctx.save();
    ctx.font = "20px Arial"
    ctx.fillStyle = fill;
    ctx.textAlign = "center";
    ctx.fillText(txt, x, y);
}

function draw_line(ctx, cell_one, cell_two)
{
    fill = "black";
    ctx.lineWidth = 5;
    ctx.save();
    
    //Full line
    ctx.beginPath();
    ctx.moveTo(cell_one.x, cell_one.y);
    ctx.lineTo(cell_two.x, cell_two.y);
   
    
    //Arrow
    var xMid = (cell_one.x + cell_two.x) / 2;
    var yMid = (cell_one.y + cell_two.y) / 2;
    ctx.moveTo(xMid, yMid);
    ctx.lineTo(xMid + 15, yMid + 15);
     ctx.lineTo(xMid - 15, yMid - 15);
    
    
     ctx.stroke();
    
}

// =====================================================  draw_grid ====
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  ) 
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    var width = rctx.canvas.width;
    var height = rctx.canvas.height;
    for ( var ix = 0; ix <= width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.5;
        rctx.stroke( );
        //if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for ( var iy = 0; iy <= height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.5;
        rctx.stroke( );
        //if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );} 
    }
    rctx.restore( );
}
