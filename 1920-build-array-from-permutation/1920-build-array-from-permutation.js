/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = [];
    nums.forEach((e,i) => ans[i]= nums[nums[i]]);

    return ans;
};