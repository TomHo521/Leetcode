/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    //console.log(intervals);
    intervals.sort((a,b) => a[0] - b[0]);
    //console.log(intervals);


    
    for (var i = 0; i < intervals.length - 1; i++) {
        arr1 = intervals[i], arr2 = intervals[i+1];
        if (arr1[1] >= arr2[0]) {
            //at location i, replace 2 elements with a new interval 
            let mergedInterval = [Math.min(arr2[0], arr1[0]), Math.max(arr2[1], arr1[1])]; 
            intervals.splice(i, 2, mergedInterval);
            i--;
        }
    }

    //console.log(intervals);
    return intervals;
};