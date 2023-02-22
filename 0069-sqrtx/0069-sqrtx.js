/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    let left = 0; pivot = 0;
    let right = x;

    while (left <= right) {
        pivot = left + Math.round((right - left) / 2);

        let pivotSquared = pivot * pivot;
        if ( pivotSquared  === x) {
            return pivot;
        }

        if ( pivotSquared > x) {
            right = pivot - 1;
        }

        if ( pivotSquared < x) {
            left = pivot + 1
        }
    }

    return left - 1;
};