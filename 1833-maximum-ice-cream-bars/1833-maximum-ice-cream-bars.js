/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b) => a - b);
    //console.log(costs);

    for (var i = 0; i < costs.length; i++) {
        coins -= costs[i];
        if (coins < 0) {
            return i;
        }
    }

    return costs.length;

    
};