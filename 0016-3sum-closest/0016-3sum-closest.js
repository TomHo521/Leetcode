/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    var closest = {difference: Infinity,
                   sum: 0};
    
        for (var i = 0; i < nums.length; i++) {
        
        for (var j = i; j < nums.length; j++) {
            
                if (j !== i) {
            
                    for (var k = j; k < nums.length; k++) {

                        if (k !== j) {

                            var temp = nums[i] + nums[j] + nums[k];
                            var difference = Math.abs(target - temp);
                            if (difference < closest.difference) {
                                closest.difference = difference;
                                closest.sum = temp;
                            }
                            

                        }

                    }
                }
        }
    }

    // if (closest.difference === 10000 && closest.sum === 10000 ) {
    //     return 0;
    // }

    return closest.sum;
};