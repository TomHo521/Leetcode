/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

var binarySearch = (arr, x) => {
    
    //get midpoint
    var mid = Math.floor(arr.length / 2);
    
    
    if (arr[mid] === x) {
        return mid;
    }
    
    if (mid === 0) {
        return mid;
    }
    
    if (x < arr[mid]) {
        return binarySearch(arr.slice(0, mid), x);
    }
    
    return mid + binarySearch(arr.slice(mid), x);
}

var delta = (val1, val2) => {
    return Math.abs(val1 - val2);
}


var findClosestElements = function(arr, k, x) {
    
    var test = arr.map((val) => [Math.abs(x - val), val]);
    
    test.sort((a,b) => {
        if (a[0] == b[0])
            return a[1] - b[1];
        return a[0] - b[0]});
    
    //console.log('why is this not sorted?',  test);;

    return test.slice(0,k).map((a) => a[1]).sort((a,b) => a - b);

}

/*
var findClosestElements = function(arr, k, x) {
    
    // binary search;
    // O(n) find
    // two indices.  One up and one down.
    
    //find the element.
    var x_loc = binarySearch(arr, x);
    
    console.log('x location: ', x_loc, ' arr[x_loc]: ', arr[x_loc]);
        
    var i = 0, j = 0;
    
    while ((i + j + 1) <= k) {
        
        if (((x_loc - i) < 0) || (x_loc === 0)) {
            j++;
            continue;
        }
        
        if (((x_loc + j) >= arr.length)  || (x_loc === (arr.length - 1))) {
            i++;
            continue;
        }
        
        if (delta(arr[x_loc - i], x) < delta(arr[x_loc + j], x)) {
            i++;
        } else {
            j++;
        }
        
    }
    
    console.log(`final val i: ${i} j: ${j}`);
    if (arr[x_loc] === x) {
        console.log('found');
        return arr.slice(x_loc - i, x_loc+j);
    }
        
    
    console.log('not found');
    
    //shift up or down?
        
    if (x_loc !== 0) {
        if (j > i) {
            return arr.slice(x_loc - i + 1, x_loc+j + 1);
        }  
        return arr.slice(x_loc - i, x_loc+j);
    }
            
    return arr.slice(x_loc - i, x_loc+j);
    
  

};

*/