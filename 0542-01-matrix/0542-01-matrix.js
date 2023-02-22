/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

var withinBounds = (mat, x , y) => {
    let m = mat.length, n = mat[0].length;
    return x < m && x >= 0 && y < n && y >= 0;
}



var updateMatrix = function(mat) {


    let dist = [];
    for (let i = 0; i < mat.length; i++) {
        let bar = new Array(mat[0].length).fill(Infinity);
        dist.push(bar);
    } 

    //pre processed
    //console.log(dist);

    //dynamic programming from the upper and the left;
    for (let m = 0; m < mat.length; m++) {
        for (let n = 0; n < mat[0].length; n++) {

                if (mat[m][n] === 0) {
                    dist[m][n] = 0;
                }

            //upper 
                if (withinBounds(mat, m - 1, n)) {
                    dist[m][n] = Math.min(dist[m][n], 1 + dist[m-1][n]);
                }
            //left
                if (withinBounds(mat, m, n -1 )) {
                    dist[m][n] = Math.min(dist[m][n], 1 + dist[m][n - 1]);
                }
        }
    }


    //dynamic programming from the bottom and right
    for (let m = mat.length - 1; m >= 0; m--) {
        for (let n = mat[0].length; n >= 0; n--) {

            //bottom
                if (withinBounds(mat, m + 1, n)) {
                    dist[m][n] = Math.min(dist[m][n], 1 + dist[m + 1][n]);
                }
            //right
                if (withinBounds(mat, m, n + 1)) {
                    dist[m][n] = Math.min(dist[m][n], 1 + dist[m][n + 1]);
                }
        }
    }

    //after top and left iteration
    //console.log(dist);

    return dist;
};