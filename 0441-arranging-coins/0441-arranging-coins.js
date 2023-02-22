/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {

    let sum = 0;
    let counter = 0;

    while (sum < n) {
        counter++;
        sum += counter;
    }

    if (sum === n) {
        return counter;
    }

    return counter - 1;

    
};