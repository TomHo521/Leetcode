/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    var leftsum = 0, rightsum = 0;
    
    //find the initial sum
    for (var i = 0; i < nums.length; i++) {
        rightsum += nums[i];
    }
      
    for (var pivot = 0; pivot < nums.length; pivot++) {
        // console.log('leftsum: ', leftsum, ' vs: rightsum: ', rightsum - nums[pivot]);  
        if (leftsum === rightsum - nums[pivot]) {
            return pivot;
        }
        leftsum += nums[pivot];
        rightsum -= nums[pivot];
    // console.log('leftsum: ', leftsum, ' vs: rightsum: ', rightsum);
    }
    
    return -1;  
};