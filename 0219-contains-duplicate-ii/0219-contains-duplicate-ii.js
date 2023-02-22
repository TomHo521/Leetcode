/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    let window = {};
    let maxLength = Math.min(nums.length - 1, k);

    for (var i = 0; i <= maxLength; i++) {
        if (nums[i] in window) {
            return true;
        } 
        window[nums[i]] = 1;
    }

    if (k > nums.length - 1) {
        return false;
    }

    for (var i = k+1; i < nums.length; i++) {
        delete window[nums[i - k - 1]];
        if (nums[i] in window) {
            return true;
        }   
            window[nums[i]] = 1;
    }
    
    return false;
};