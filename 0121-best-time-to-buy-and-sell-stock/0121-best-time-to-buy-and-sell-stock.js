/**
 * @param {number[]} prices
 * @return {number}
 */

var memoize = function(func) {
    let cache = {};

    return (...n) => {
        let key = n.join('x');
        if (key in cache) {
            return cache[key];
        }
        cache[key] = func(...n);
        return cache[key];
    }
}

var maxProfitByDay = function(day, ownStock) {

    if (day === prices.length - 1) {
        if (ownStock) {
            return prices[day];
        } 
        return 0;
    }

    if (ownStock) {
        //options are to sell or hold
        let sell = prices[day];
        let hold = maxProfitByDay(day + 1, true);
        return Math.max(sell, hold);
    } else {
        //options are to buy or avoid
        let buy = maxProfitByDay(day + 1, true) - prices[day];
        let avoid = maxProfitByDay(day + 1, false);
        return Math.max(buy, avoid);
    }
}

var maxProfit = function(prices) {

    let memoizeStock = memoize((day, ownStock) => {
        if (day === prices.length - 1) {
            if (ownStock) {
                return prices[day];
            }    
            return 0;
        }

        if (ownStock) {
            //options are to sell or hold
            let sell = prices[day];
            let hold = memoizeStock(day + 1, true);
            return Math.max(sell, hold);
        } else {
            //options are to buy or avoid
            let buy = memoizeStock(day + 1, true) - prices[day];
            let avoid = memoizeStock(day + 1, false);
            return Math.max(buy, avoid);
        }
    });


    return memoizeStock(0, false);
};