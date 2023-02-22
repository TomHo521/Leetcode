/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var shiftRight = (arr, i) => {
    for (var j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
    }
}
var duplicateZeros = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            shiftRight(arr, i);
            i++;
        }
    }
};