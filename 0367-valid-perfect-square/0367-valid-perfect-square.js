/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    var left = 0; right = num;
    var pivot = 0;

    while (left <= right) {
        pivot = left + Math.round((right - left)/2);

        let sq = pivot * pivot;

        if (sq === num) {
            return true;
        } 

        if (sq < num) {
            left = pivot + 1;
        }

        if (sq > num) {
            right = pivot - 1;
        }

    }

    return (left * left === num);
    

};