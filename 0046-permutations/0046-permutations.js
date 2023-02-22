/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var backtracking = function(nums, path, res) {
    if (nums.length === 0) {
        res.push(path.slice());
        return;
    }

    for (var i = 0; i < nums.length; i++) {
        path.push(nums[i]);
        
        let tempArr = nums.slice(); 
        tempArr.splice(i,1);

        backtracking(tempArr, path, res);
        path.pop();
    }
}

var permute = function(nums) {
    let res = [];
    backtracking(nums, [], res);
    return res;

    
};