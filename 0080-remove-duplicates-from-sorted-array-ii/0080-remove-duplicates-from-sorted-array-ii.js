/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    var k = nums.length;
    var twoFound = false;
    
    if (nums.length === 1) {
        return nums.length;
    }
        
    for (var i = 1; i < nums.length; i++) {
        
        if (nums[i] !== nums[i-1]) {
            twoFound = false;
        } else if ((nums[i] === nums[i-1]) && !(twoFound)) {
            twoFound = true;
            
        } else if ((nums[i] === nums[i-1]) && (twoFound)) {
          var j = 1;
          while ((i+j < nums.length) && (nums[i+j] === nums[i+j-1])) {
              j++;
          }
            
          nums.splice(i, j);
          k -= j;
          twoFound = false;
        }
        
    }
    
    return k;
};