/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a-b);
    console.log(nums);
    let output = 0;
    for (var i = 1; i < nums.length; i +=2) {
        output = output + Math.min(nums[i], nums[i-1]);
    }

    return output;
    
};