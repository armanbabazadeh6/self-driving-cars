class Point {
    constructor(x, y) { // x and y is where we want the point to be
        this.x = x;
        this.y = y;
    }

    draw(ctx, size = 18, color = "black") {
        const rad = size / 2; //draw points as circles
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, rad, 0, Math.PI * 2); //Draw this at this x and y full circle starting at 0 degree's and ending at 360 degree's
        ctx.fill();
    }
}