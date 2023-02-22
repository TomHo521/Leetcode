/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    let prefixSums = {
        0: 1,
    };

    let sum = 0, count = 0;

    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];

        let candidatePrefixSum = sum - k;

        if (candidatePrefixSum in prefixSums) {
            count += prefixSums[candidatePrefixSum];
        }

        if (sum in prefixSums) {
            prefixSums[sum]++;
        } else {
            prefixSums[sum]  = 1;
        }
    }

    return count;






     
};