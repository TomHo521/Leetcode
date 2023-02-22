/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var swap = function(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

//let range be an array
var partition = function(nums, low, high) {

    let pivot = nums[high];
    let i = low - 1;

    for (var j = low; j < high; j++) {
        if (nums[j] < pivot) {
            i++;
            swap(nums, i, j);
        }
    }
    swap(nums, i +1 , high);
    return i + 1;
}

var quickSort = function(nums, low, high) {

    

    //once we partition the array into two parts, do not further include the pivot index itself 
    // into the quicksort.

    if (low < high) {
        let partitionIndex = partition(nums, low, high);
        quickSort(nums, low, partitionIndex - 1);
        quickSort(nums, partitionIndex + 1, high);
    }



}

var sortColors = function(nums) {
    return quickSort(nums, 0, nums.length - 1);
};