/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


var largestSubarray = function(nums, k) {

    let maxIndex = 0;

    for (var i = 0; i <= nums.length - k; i++) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
        }
    }

    return nums.slice(maxIndex, maxIndex +k);
    
};