/**
 * @param {number} n
 * @return {number}
 */
var memoizeFunction = function(func) {
    let cache = {};

    return (n) => {
        if (n in cache) {
            //console.log('accessing cache... for n = ', n);
            return cache[n];
        } else {
            //console.log('not found in cache for n = ',n);
            cache[n] = func(n)
            return cache[n];
        }
    };
}


var climbStairs = function(n) {
    
    var actualClimbStairsFunction = memoizeFunction((n) => {
        if (n < 0) {
            return false;
        }
        if (n === 0) {
            return 1;
        }
        let count = 0;
        let oneStep = false;
        if ((n - 1) >= 0) {
            oneStep = actualClimbStairsFunction(n - 1);
        }
        if (oneStep) {
            count += oneStep;
        }
        let twoStep = false;
        if ((n - 2) >= 0) {
            twoStep = actualClimbStairsFunction(n - 2);
        } 
        if (twoStep) {
            count += twoStep;
        }
        return count;
    });

    let result = actualClimbStairsFunction(n);

    return result;
};