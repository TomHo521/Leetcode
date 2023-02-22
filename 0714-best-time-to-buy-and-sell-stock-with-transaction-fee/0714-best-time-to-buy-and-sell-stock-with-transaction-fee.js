/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {

   var dpGetDailyProfit = _.memoize((dayState) => {

       let state = dayState.slice(-1)
       let day = parseInt(dayState.substring(0, dayState.length - 1));

       if (state === 'n') {
           state = "not holding";
       } else {
           state = "holding"
       }

       if (day >= prices.length) {
           return 0;
       }

       //we can sell stock here
       if (state === "holding") {
           let dayStateSell = day + 1 + 'n';
           let dayStateHold = day + 1 + 'h';
           
           let sell = dpGetDailyProfit(dayStateSell) + prices[day];
           let hold = dpGetDailyProfit(dayStateHold);
           return Math.max(sell, hold);
       }

       //we can sell stock here
       if (state === "not holding") {
           let dayStateBuy = day + 1 + 'h';
           let dayStateAvoid = day + 1 + 'n';
           
           let buy = dpGetDailyProfit(dayStateBuy) - prices[day] - fee;
           let avoid = dpGetDailyProfit(dayStateAvoid);
           return Math.max(buy, avoid);
       }

   });

   return dpGetDailyProfit('0n');
    
};