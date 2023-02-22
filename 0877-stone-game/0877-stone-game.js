/**
 * @param {number[]} piles
 * @return {boolean}
 */

var stoneGame = function(piles) {
    
    var aliceTurn = true;
    var aliceScore = 0, bobScore = 0;
    var cache = {};
    
    var helper = function (aliceTurn, startIndex, endIndex) {
        
        if ((endIndex - startIndex) === 0) {
            return piles[startIndex];
        }
        
        var cacheLX = (startIndex + 1).toString() + 'xx'
        var cacheLY = endIndex.toString();
        var cacheRX = startIndex.toString();
        var cacheRY = (endIndex - 1).toString();
        var leftChoice, rightChoice;
        
        cacheLX = cacheLX + cacheLY;
        cacheRX = cacheRX + cacheRY;
        
        if (cache[cacheLX] === undefined) {
            leftChoice = helper(!aliceTurn, startIndex+1, endIndex) +           
            piles[startIndex];
            cache[cacheLX] = leftChoice;
        } else {
            leftChoice = cache[cacheLX];
        }
        
        if (cache[cacheLX] === undefined) {
            rightChoice = helper(!aliceTurn, startIndex, endIndex - 1) +       
            piles[startIndex];
            cache[cacheRX] = rightChoice;
        } else {
            rightChoice = cache[cacheLX];
        }
          
        if (aliceTurn) {
            aliceScore = Math.max(leftChoice, rightChoice);    
        } else {
            bobScore = Math.max(leftChoice, rightChoice);
        }
        
        return Math.max(leftChoice, rightChoice);
    }
    
    helper(aliceTurn, 0, piles.length - 1);
    
    return (aliceScore > bobScore);
    
};