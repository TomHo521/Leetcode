/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numDict = {}
    nums.forEach(e => {
        if (e in numDict) {
            numDict[e]++;
        } else {
            numDict[e] = 1;
        }
    });

    let topK = Object.keys(numDict).sort((a,b) => numDict[b]-numDict[a]);
    //console.log(topK)
    return topK.slice(0,k);
    
};