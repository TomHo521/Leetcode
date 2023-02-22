/**
 * @param {number[]} nums
 * @return {number[]}
 */


//cleaned up version.  Prior version outputted text for proper debugging
//FOLLOW UP successful.  O(1) extra space complexity.
var productExceptSelf = function(nums) {
    var res = [];
    var acc = 1;
   
    acc = 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        res.unshift(acc);
        acc *= nums[i];
    }

    acc = 1;
    for (var i = 0; i < nums.length; i++) {
        res[i] *= acc;
        acc *= nums[i];
    }

    return res;
    
};


// var productExceptSelf = function(nums) {
//     var res = [];
//     var acc = 1;
   
//     acc = 1;
//     for (var i = nums.length - 1; i >= 0; i--) {
//         let newObj = {rightProduct: acc}
//         res.unshift(newObj);
//         acc *= nums[i];
//     }

//     acc = 1;
//     for (var i = 0; i < nums.length; i++) {
//         res[i].leftProduct = acc;
//         acc *= nums[i];
//     }

//     console.log(res);

//     let finalResult = res.map(e => e.rightProduct * e.leftProduct);
//     return finalResult;
    
// };