/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    
    var finalArray = [], num1_counter = 0, num2_counter = 0; 
    
    while ((num1_counter < m) && (num2_counter < n)) {
        if (nums1[num1_counter] < nums2[num2_counter]) {
            finalArray.push(nums1[num1_counter]);
            num1_counter++;
        } else {
            finalArray.push(nums2[num2_counter]);
            num2_counter++;
        }
    } 
    
    while (num1_counter < m) {
        finalArray.push(nums1[num1_counter]);
        num1_counter++;
    }
    
    while (num2_counter < n) {
        finalArray.push(nums2[num2_counter]);
        num2_counter++;
    }
    
    for (var i = 0; i < m+n; i++) {
        nums1[i] = finalArray[i];
    }
};