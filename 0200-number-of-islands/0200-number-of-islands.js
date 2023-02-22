/**
 * @param {character[][]} grid
 * @return {number}
 */

var checkBounds = function(searchedGrid, coordinate) {
    return (coordinate.x >= 0) && (coordinate.y >= 0) &&
           (coordinate.x < searchedGrid.length) && 
           (coordinate.y < searchedGrid[0].length);
}


var numIslands = function(grid) {
    
    var searchedGrid = [];
        
    var m = grid.length;
    var n = grid[0].length;
    let numIslands = 0;
    //initialized the searched Array
    for (var i = 0; i < m; i++ ){
        var nArray = [];
        for (var j = 0; j < n; j++) {
            nArray.push(false);
        }
        searchedGrid.push(nArray);
    } 
        
    var DFS = function(searchedGrid, grid, coordinate) {
        //given a point, check all 8.
        var xOffset = [0,0,1,-1];
        var yOffset = [-1,1,0,0];

        for (var i = 0; i < 4; i++) {
            var newCoord = {x: coordinate.x + xOffset[i],
                            y: coordinate.y + yOffset[i]};

            if (checkBounds(searchedGrid, newCoord)) {
                if (!searchedGrid[newCoord.x][newCoord.y] && 
                    (grid[newCoord.x][newCoord.y] === "1")) {

                    searchedGrid[newCoord.x][newCoord.y] = true;
                  
                    DFS(searchedGrid, grid, newCoord); 
                }
            }
        } 
    }
    
    for (var x = 0; x < m; x++) {
        for (var y = 0; y < n; y++) {
            if ((grid[x][y] === "1") && !searchedGrid[x][y]) {
                searchedGrid[x][y] = true;
                DFS(searchedGrid, grid, {x: x, y: y});
                numIslands++;
            }
        }   
    }  
    return numIslands;
};