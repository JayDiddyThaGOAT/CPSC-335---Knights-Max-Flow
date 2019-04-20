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

function draw_capacity(ctx, x, y, txt, fill)
{
    fill = fill || "black";
    ctx.save();
    ctx.font = "20px Arial"
    ctx.fillStyle = fill;
    ctx.textAlign = "center";
    ctx.fillText(txt, x, y);
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
