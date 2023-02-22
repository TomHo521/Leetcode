/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {

    if (grid.length === 1 && grid[0].length === 1) {
        return grid[0][0];
    }



    for (var i = 1; i < grid[0].length; i++) {
        grid[0][i] = grid[0][i - 1] + grid[0][i];
    }

    if (grid.length === 1) {
        return grid[0][grid[0].length - 1];
    }

    for (var i = 1; i < grid.length; i++) {
        grid[i][0] = grid[i][0] + grid[i-1][0];
    }

    for (var m = 1; m < grid.length; m++) {
        for (var n = 1; n < grid[0].length; n++) {
            grid[m][n] = grid[m][n] + Math.min(grid[m - 1][n], grid[m][n - 1]);
        }
    }

    return grid[m - 1][n - 1];

};