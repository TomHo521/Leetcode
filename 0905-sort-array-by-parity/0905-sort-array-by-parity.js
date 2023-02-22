/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    return nums.filter(e => e % 2 === 0).concat(nums.filter(e => e % 2 !== 0))
};