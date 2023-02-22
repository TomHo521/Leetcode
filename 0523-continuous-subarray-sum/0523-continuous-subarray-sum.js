/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */


var checkSubarraySum = function(nums, k) {
    let sum = 0, prefixSumModulos = {0:0};

    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        let key = sum % k;
        if (key in prefixSumModulos) {
            
            if (prefixSumModulos[key] < i) {
                return true;
            }
        } else {
            prefixSumModulos[key] = i + 1;
        }
    }
    
    return false;
};


// var checkSubarraySum = function(nums, k) {

//     let sum = 0;
//     let prefixSumModulos = {
//         0: 0,
//     };

//     for (var i = 0; i < nums.length; i++) {
    
//         sum += nums[i];
//         if (sum % k === 0) {
          
//             return true;
//         } else {
//             let remainderKey = (sum % k);
//             if (prefixSumModulos[remainderKey] < i) {
//                 return true;
//             }
//         }
        
//         let key = sum % k;
//         if (key in prefixSumModulos) {
//             prefixSumModulos[key]++;
//         } else {
//             prefixSumModulos[key] = 1;
//         }
        
//     }
//     return false;
// };