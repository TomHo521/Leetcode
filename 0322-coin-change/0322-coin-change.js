/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var memoizeFunction = function(f) {
    
    var cache = {};
    
    
    return (...args) => {
        var stringArray = args[1].toString();
        
        if (args[0] in cache) {
            //console.log(`cache read: ${cache[args[0]][stringArray]}`);
            if (stringArray in cache[args[0]]) {
                return cache[args[0]][stringArray];
            }
        }
        //console.log(`cache NOT read: ${cache[args[0]][stringArray]}`);
        let result = f(args[0], args[1]);
        if (args[0] in cache) {
            cache[args[0]][stringArray] = result;
        } else {
            cache[args[0]] = {};
        }
        return result;
    }
}


var coinChanger = memoizeFunction( (amount, coins) => {
    
    // go through the tree.
    if (amount < 0) {
        return Infinity;
    }
    
    if (amount === 0) {
        return 0;
    }
        
    var minCoins = Infinity;
    
    for (var i = 0; i < coins.length; i++) {
        minCoins = Math.min(minCoins, coinChanger(amount - coins[i], coins) + 1); 
    }

    return minCoins;
});


var coinChange = function(coins, amount) {
    //let f = memoizeFunction(coinChanger);
    
    let output = coinChanger(amount, coins);
    //console.log(`what is output ${output}`);
    
    if (output === Infinity) {
        return -1;
    }
    
    return output;
};