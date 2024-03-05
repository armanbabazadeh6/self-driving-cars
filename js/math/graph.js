//Implement a Spatial Graph where the points would be intersections and connected by segments with one point at each end
//This is a bit unconvential but will simplfy my task in hand

class Graph {
    constructor(points = [], segments = []) {
        this.points = points;
        this.segments = segments;
    }

    addPoint(point) {
        this.points.push(point);
    }

    containsPoint(point) {
        return this.points.find((p) => p.equals(point));
        //Find will loop through all the points p, returns the one that equals point
    }

    tryAddPoint(point) {
        if (!this.containsPoint(point)) { //If point is not apart of the graph
            this.addPoint(point); //Then we add point
            return true;
        }
        return false;
    }

    addSegment(seg) {
        this.segments.push(seg);
    }

    containsSegment(seg) {
        return this.segments.find((s) => s.equals(seg));
    }

    tryAddSegment (seg) {
        if(!this.containsSegment(seg) && !seg.p1.equals(seg.p2)) {
            this.addSegment(seg);
            return true;
        }
        return false;
    }

    removeSegment(seg) {
        this.segments.splice(this.segments.indexOf(seg), 1);
        //Splice removes elements at given index, I remove one element the segment itself
    }

    removePoint(point) {
        const segs = this.getSegmentsWithPoint(point);
        for (const seg of segs) {
            this.removeSegment(seg);
        }
        this.points.splice(this.points.indexOf(point), 1);
        //Splice removes elements at given index, I remove one element the segment itself
    }

    getSegmentsWithPoint(point) {
        const segs = [];
        for (const seg of this.segments) {
            if (seg.includes(point)) {
                segs.push(seg);
            }
        }
        return segs;
    }

    dispose() {
        this.points.length = 0;
        this.segments.length = 0;
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