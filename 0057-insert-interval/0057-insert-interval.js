/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */


 var merge = function(intervals) {

    intervals.sort((a,b) => a[0] - b[0]);    
    for (var i = 0; i < intervals.length - 1; i++) {
        arr1 = intervals[i], arr2 = intervals[i+1];
        if (arr1[1] >= arr2[0]) {
            //at location i, replace 2 elements with a new interval 
            let mergedInterval = [Math.min(arr2[0], arr1[0]), Math.max(arr2[1], arr1[1])]; 
            intervals.splice(i, 2, mergedInterval);
            i--;
        }
    }

    return intervals;
};

var mergeIntervals = function (int1, int2) {
    return [ Math.min(int1[0], int2[0]), Math.max(int1[1], int2[1])];
}

var bs = function(intervals , query) {
    if (intervals.length === 1 || intervals.length === 0 ) {
        return 0;
    }

    let mid = Math.floor(intervals.length/2);
    if (query === intervals[mid][0]) {
        return mid;
    }
    if (query < intervals[mid][0]) {
        return bs(intervals.slice(0, mid), query);
    }
    return mid + bs(intervals.slice(mid), query);
}
var overLap = function(int1, int2) {
    let sorted = [int1, int2].sort((a,b) => a[0]-b[0]);
    if (!int1 || !int2) {
        console.log('error');
        return false;
    }
    //return (int1[1] >= int2[0]);
    return (sorted[0][1] >= sorted[1][1]);
}


var insert = function(intervals, newInterval) {
    let pl = bs(intervals, newInterval[0]);
    console.log('to be inserted at: ', pl);

    if (overLap(intervals[pl], newInterval)) {
        console.log('current interval ', intervals);
        let replace = mergeIntervals(intervals[pl], newInterval);
        intervals.splice(pl, 1, replace);
    } else {
        console.log('non overlap');
        intervals.splice(pl, 0, newInterval);
    }
    
    return merge(intervals);
};