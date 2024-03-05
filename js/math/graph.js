//Implement a Spatial Graph where the points would be intersections and connected by segments with one point at each end
//This is a bit unconvential but will simplfy my task in hand

class Graph {
    constructor(points = [], segments = []) {
        this.points = points;
        this.segments = segments;
    }

    draw(ctx) { //takes canvas contex as a parameter
        for(const seg of this.segments) {
            seg.draw(ctx); //Each segment will draw itself on the canvas context
        }

        for(const point of this.points){
            point.draw(ctx); //Each point will draw itself on the canvas context... will draw after because I do not want segment lines ontop of the points
        }
    }
}