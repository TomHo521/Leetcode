/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b) => b-a)
    let previous = nums[0];
    let different = 0;
    
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== previous) {
            previous = nums[i];
            different++;
            if (different === 2) {
                return nums[i]
            }
        }
    }
    return nums[0];
};