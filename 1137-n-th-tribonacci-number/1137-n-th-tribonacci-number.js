/**
 * @param {number} n
 * @return {number}
 */


var memoizedTrib = _.memoize(function(n) {
    
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;
    
    return memoizedTrib(n-1) + memoizedTrib(n-2) + memoizedTrib(n-3); 
    
});

var tribonacci = function(n) {
    
    return memoizedTrib(n)
};

