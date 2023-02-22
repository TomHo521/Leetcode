/**
 * @param {number[][]} grid
 * @return {number}
 */

var boundaryCheck = function(grid, i, j) {
    
    return (i >= 0) && (j >= 0) && (i < grid.length) && (j < grid[0].length);
}

var countPoints = function(grid, i, j) {
    
    var col = [-1, 1, 0, 0];
    var row = [0, 0, 1, -1];
    
    var points = 0;
    
    for (var counter = 0; counter < 4; counter++) {
        
        var x = j + col[counter];
        var y = i + row[counter];
        
        if ((x < 0) || (x >= grid[0].length) || 
            (y < 0) || (y >= grid.length)) {
            points++;
        } else if (grid[y][x] === 0) {
            points++;
            
        }
    }
    
    return points;
}

var islandPerimeter = function(grid) {
    
    var totalPoints = 0;
    
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                totalPoints += countPoints(grid, i, j);
            }
        }
    }
    
    return totalPoints;
};