/**
 * @param {number[]} nums
 * @return {number}
 */

var swap = function(arr, target1, target2) {
    let temp = arr[target1];
    arr[target1] = arr[target2];
    arr[target2] = temp;
}

var heapify = function(arr, N, i) {
    let largest = i, l = 2*i + 1, r = 2*i + 2;  
    if (l < N && arr[l] > arr[largest]) {
        largest = l;
    }
    if (r < N && arr[r] > arr[largest]) {
        largest = r;
    }

    if (arr[i] !== arr[largest]) {
        swap(arr, i, largest)
        //recursively heapify the modified node.
        heapify(arr, N, largest);
    }
}

//my implementation uses a MaxHeap.
var maxProduct = function(nums) {

    if (nums.length === 2) {
        return (nums[0] - 1) * (nums[1] - 1);
    }

    //build heap
    for (var i = Math.floor(nums.length/2); i >= 0; i--) {
        heapify(nums, nums.length, i);
    }

    //remove the largest;
    swap(nums, 0, nums.length - 1);
    let biggest = nums.pop();
    heapify(nums, nums.length, 0);

    //remove the second largest
    swap(nums, 0, nums.length - 1);
    let secondBiggest = nums.pop();
    heapify(nums, nums.length, 0);

    return (biggest - 1 ) * (secondBiggest - 1);


    
};