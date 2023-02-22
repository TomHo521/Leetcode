/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    var canJumpDP = _.memoize((start) => {

        //base case
        if (start >= nums.length - 1) return true;

        //fail case
        if (nums[start] === 0) return false;

        //normal case
        let possible = false;
        for (var i = 1; i <= nums[start]; i++) {
            //whatever the start position is, we add to it.
            possible = possible || canJumpDP(start + i);
            if (possible) return possible;
        }

        return possible;
    });

    return canJumpDP(0);
    
};