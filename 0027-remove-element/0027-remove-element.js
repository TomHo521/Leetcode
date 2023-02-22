/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
    removeCounter = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            removeCounter++;
            //left shift
            // for (j = i; j < nums.length - 1; j++) {
            //     nums[j] = nums[j + 1];
            // }
            nums.splice(i, 1);
            i--;
        }
    }

    // for (var i = nums.length - 1; i >= removeCounter; i--) {
    //     nums[i] = '_'
    // }
    
};