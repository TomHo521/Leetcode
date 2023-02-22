/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    var lastcurrent = nums[0];
    var k = nums.length;

    for (var i = 1; i < nums.length; i++) {
        if (nums[i] === lastcurrent) {
            nums.splice(i, 1);
            i--;
            k--;    
        }
        lastcurrent = nums[i];
    }
    
    return k;
};