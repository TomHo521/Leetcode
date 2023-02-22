/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {

    var numObj = {};

    nums.forEach(e => (e in numObj)? numObj[e]++ : numObj[e] = 1);

    for (let e of Object.keys(numObj)) {
        if (numObj[e] > (nums.length/2)) {
            return e;
        }
    }

    return 'error';


    
    
};