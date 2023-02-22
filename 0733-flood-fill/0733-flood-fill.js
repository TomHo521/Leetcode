/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

 var withinBounds = function(image, sr, sc, color, basecolor) {   
     if ((sr < 0) || (sr >= image.length) || (sc < 0) || (sc >= image[0].length)) {
         return false;
     }
     if (image[sr][sc] !== basecolor) {
         return false;
     }
     return true;
 }

var floodFillDFS = function(image, sr, sc, color, visited, basecolor) {

    visited[sr][sc] = true;   
    image[sr][sc] = color;

    var arr = [ [0, -1, 'north'], [0,1,'south'], [1, 0, 'east'], [-1,0, 'west']];

    arr.forEach(t => {
        if (withinBounds(image, sr + t[0], sc + t[1], color, basecolor)) {
            if (!visited[sr + t[0]][sc + t[1]]) {
                floodFillDFS(image, sr + t[0], sc + t[1], color, visited, basecolor);
            }
        }
    });
}
 
var floodFill = function(image, sr, sc, color) {
    // let vRow = Array(image[0].length).fill(false);
    // let visited = Array(image.length).fill(vRow.slice());

    var visited = [];
    for (var i = 0; i < image.length; i++) {
        let newrow = [];
        for (var j = 0; j < image[0].length; j++) {
            newrow.push(false);
        }
        visited.push(newrow)
    }
    
    floodFillDFS(image, sr, sc, color, visited, image[sr][sc]);
    return image;
};