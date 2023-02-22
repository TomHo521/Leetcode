var MedianFinder = function() {
    
    this.list = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {

    //edge case
    if (this.list.length === 0) {
        this.list.push(num);
        return;
    } 

    //find where to put the new num;
    let left = 0;
    let right = this.list.length - 1;

    while (left <= right) {
        let pivot = left + Math.floor((right - left)/2);
        if (num >= this.list[pivot]) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    //final placement should be left
    //console.log('position found: ', left);
    this.list.splice(left, 0, num);

    //console.log(this.list);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {

    if (this.list.length % 2 === 1) {
        return this.list[Math.round((this.list.length-1) / 2)];
    } else {
        let m = Math.floor((this.list.length - 1)/2);
        let median = (this.list[m] + this.list[m+1])/2
        return median;

    }
    
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */