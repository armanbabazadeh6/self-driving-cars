class Point {
    constructor(x, y) { // x and y is where we want the point to be
        this.x = x;
        this.y = y;
    }

    equals(point) { //equals method
        return this.x == point.x && this.y == point.y
    }

    draw(ctx, { size = 18, color = "black", outline = false, fill } = {}) { // Group properties as object so we can pass it in any order we want
        const rad = size / 2; //draw points as circles
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, rad, 0, Math.PI * 2); //Draw this at this x and y full circle starting at 0 degree's and ending at 360 degree's
        ctx.fill();
        if (outline) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "red";
            ctx.arc(this.x, this.y, rad * 0.6, 0, Math.PI * 2);
            ctx.stroke();
        }
        if (fill) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, rad * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = "red";
            ctx.fill();
        }
    }
}