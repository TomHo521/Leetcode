/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
    var lis = [nums[0]];

    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > lis[lis.length - 1]) {
            lis.push(nums[i]);
            continue;
        } 

        if (nums[i] < lis[lis.length - 1]) {
            //find where to replace the number.

            for (var j = 0; j < lis.length; j++) {
                if (lis[j] >= nums[i]) {
                    lis[j] = nums[i];
                    break;
                }
            }

            // var left = 0;
            // var right = lis.length - 1;

            // while (left < right) {
            //     let pivot = Math.floor((right - left) / 2);

            //     if (nums[i] < pivot) {
            //         right = pivot - 1;
            //     } else {
            //         left = pivot + 1;
            //     }
            // }

            // lis[left] = nums[i];
            // console.log('contents of lis: ', lis);
            // console.log(`left: ${left}  right: ${right} nums[left] : ${nums[left]}`);
        }
    }

    return lis.length;

};