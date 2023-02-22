/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    if (nums.length === 1) {
          return nums;
    }
    var localMax = nums[0], globalMax = nums[0];
    for (var i = 1; i < nums.length; i++) {
        localMax = Math.max(nums[i], nums[i] + localMax);
        globalMax = Math.max(localMax, globalMax);
    }
    return globalMax;
};