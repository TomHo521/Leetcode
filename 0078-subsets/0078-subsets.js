/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    let powerSet = [ [] ];
    //build up the powerSet Iteratively
    for (var i = 0; i < nums.length; i++) {
        //build copy of powerSet
        let copy = [];
        powerSet.forEach(e => {
            let arr = [];
            e.forEach(item => arr.push(item));
            arr.push(nums[i]);
            copy.push(arr);
        });
        powerSet = powerSet.concat(copy);
    }

    return powerSet;  
};