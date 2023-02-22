/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1,1];
    
    var rowIndexCache = [[1], [1,1]];
    
    for (var i = 2; i < rowIndex+1; i++) {
        let newRow = [1];
        let previousRow = rowIndexCache[i-1];
        
        for (var j = 0; j < previousRow.length-1; j++) {
            newRow.push(previousRow[j] + previousRow[j+1]);
        }
        newRow.push(1);
        rowIndexCache[i] = newRow;
    }
    
    return rowIndexCache[rowIndexCache.length-1];
};