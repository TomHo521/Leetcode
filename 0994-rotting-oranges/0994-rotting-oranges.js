/**
 * @param {number[][]} grid
 * @return {number}
 */

var rotAway = (grid, m, n, incoming, freshCount) => {

    //m is y, n is x
    var nshift = [0, 0, -1, 1];
    var mshift = [-1, 1, 0, 0];

    for (var i = 0; i < nshift.length; i++) {
        let tempN = n + nshift[i];
        let tempM = m + mshift[i];
        if (tempM < 0 || tempM >= grid.length || tempN < 0 || tempN >= grid[0].length) {
            continue;
        } else {
            if (grid[tempM][tempN] === 1) {
                grid[tempM][tempN] = 2;
                freshCount--;
                incoming.push([tempM, tempN]);
            }
        }
    }

    return freshCount;
}


var orangesRotting = function(grid) {

    q = [];
    let freshCount = 0;

    //initialize the queue.
    for (var m = 0; m < grid.length; m++) {
        for (var n = 0; n < grid[0].length; n++) {
            if (grid[m][n] === 2) {
                q.push([m,n]);
            } 
            if (grid[m][n] === 1) {
                freshCount++;
            }
        }
    }

    let t = 0;
    while (q.length > 0) {
        //let formerFreshCount = freshCount;
        let incoming = [];
        while (q.length > 0) {
            let coord =  q.shift();
            freshCount = rotAway(grid, coord[0], coord[1], incoming, freshCount);
        }
        
        // console.log('formerFreshCount: ', formerFreshCount);
        // console.log('freshCount: ', freshCount);
        
        // console.log('time = ', t);
        // for (var j = 0; j < grid.length; j++) {
        //     console.log(grid[j]);
        // }
        // console.log('===================');

        if (incoming.length > 0) {
            t++;
        }
        q = incoming;
    }

    if (freshCount > 0) {
        return -1;
    }

    return t;
};