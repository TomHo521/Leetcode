/**
 * @param {number[][]} matrix
 * @return {number}
 */


var inBounds = (m, n, matrix) =>  {
    return (n >= 0) && (n < matrix[0].length);
}

var minFallingPathSum = function(matrix) {

    if (matrix.length === 1) {
        return matrix[0][0];
    }
    
    let dp = [];
    matrix.forEach(e => {
        let newRow = new Array(matrix[0].length).fill(Infinity);
        dp.push(newRow);
    });

    //fill in the first bar
    for (var i = 0; i < matrix[0].length; i++) {
        dp[0][i] = matrix[0][i];
    }

    let minSum = Infinity;

    for (var row = 1; row < matrix.length; row++) {
        for (var col = 0; col < matrix[0].length; col++) {

            let upper = dp[row - 1][col] + matrix[row][col];
            let upperLeft=(inBounds(row-1,col-1,matrix))?  dp[row-1][col-1]+matrix[row][col] : Infinity;
            let upperRight=(inBounds(row-1,col+1,matrix))?  dp[row-1][col+1]+matrix[row][col] : Infinity;

            dp[row][col] = Math.min(upperLeft, upper, upperRight);
            if (row === matrix.length - 1) {
                minSum = Math.min(minSum, dp[row][col]);
            }
        }
    }

    return minSum;
};