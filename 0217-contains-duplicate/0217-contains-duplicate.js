/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let newmap = new Map();

    nums.forEach(e => {
        if (!newmap.has(e)) {
            newmap.set(e, true);
        } 
    });

    return newmap.size < nums.length;
    
};