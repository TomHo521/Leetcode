/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    
    
    if (numRows === 1) {
        return [[1]];
    }
    
    if (numRows === 2) {
        return [[1], [1,1]];
    }
    
    var pascalsTriangle = [[1], [1,1]];
    var i = 2;
    
    while (numRows > i) {
        i++;
        
        let lastArray = pascalsTriangle[pascalsTriangle.length - 1];
        let tempArray = [];
        
        tempArray.push(1);
        for (var j = 0; (j + 1) < lastArray.length; j++) {
            tempArray.push(lastArray[j] + lastArray[j+1]);
        }
        tempArray.push(1);
        pascalsTriangle.push(tempArray);
    }
    
    return pascalsTriangle;
    
};