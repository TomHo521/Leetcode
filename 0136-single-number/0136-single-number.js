/**
 * @param {number[]} nums
 * @return {number}
 */

 
var singleNumber = function(nums) {

    var t = nums[0];

    for (var i = 1; i < nums.length; i++) {
        t = t ^ nums[i];
    }
    console.log(t);
    return t;
    
};