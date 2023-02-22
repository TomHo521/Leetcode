/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

var euclideanDistanceOrigin = (x,y) => {
    // let xDist = (x1-x2);
    // xDist *= xDist;

    // let yDist = (y1-y2);
    // yDist *= yDist;
    return Math.sqrt( (x*x) + (y*y));

}

//do we actually have to compute the euclidean distance?

var kClosest = function(points, k) {

    let distances = points.map(e => {
        let dist = e[0] * e[0] + e[1] * e[1];
        return {point: e,
                dist: dist
                }
        });
    distances = distances.sort((a,b) => a.dist - b.dist);
    //console.log(distances);

    let res = [];
    for (var i = 0; i < k; i++) {
        res.push(distances[i].point);
    }

    return res;
    
};