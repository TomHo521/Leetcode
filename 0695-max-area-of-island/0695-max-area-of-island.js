/**
 * @param {number[][]} grid
 * @return {number}
 */

var isOk = function(m, n, grid) {
    
    return (m >= 0) && (m < grid.length) && (n >= 0) && (n < grid[0].length);
}

var DFS = (m, n, grid, visited) => {
    let mOffset = [0,0,1,-1];
    let nOffset = [1,-1,0,0];

    let area = 0;
    visited[m][n] = true;

    for (var i = 0; i < mOffset.length; i++) {
        let mLoc = m + mOffset[i];
        let nLoc = n + nOffset[i];
        if (isOk(mLoc, nLoc, grid)) {
            if (!visited[mLoc][nLoc] && grid[mLoc][nLoc] === 1) {
                area += DFS(mLoc, nLoc, grid, visited);
            }
        } 
    }

    return 1 + area;
}

var maxAreaOfIsland = function(grid) {

    let visited = []; 
    for (var m = 0; m < grid.length; m++) {
        let temp = new Array(grid[0].length).fill(false);
        visited.push(temp);
    }

    let maxArea = 0;

    for (var m = 0; m < grid.length; m++) {
        for (var n = 0; n < grid[0].length; n++) {
            if (!visited[m][n] && grid[m][n] === 1) {
                let localArea = DFS(m, n, grid, visited);
                maxArea = Math.max(maxArea, localArea);
            }
        }
    }

    return maxArea;
    
};