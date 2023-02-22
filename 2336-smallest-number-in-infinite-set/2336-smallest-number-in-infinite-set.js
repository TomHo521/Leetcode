var SmallestInfiniteSet = function() {
    this.removedButAboveStart = {};
    this.start = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {    
    let poppedItem = this.start;

    let newStart = this.start + 1;

    while (newStart in this.removedButAboveStart) {
        newStart++;
    }
    
    this.start = newStart;
    this.removedButAboveStart[poppedItem] = 1;
    //console.log(`removed is ${poppedItem}: new start is: ${this.start}`);
    return poppedItem;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {

    if (num < this.start) {
        this.start = num;
    }

    if (num in this.removedButAboveStart) {
        delete this.removedButAboveStart[num];
    }

    //console.log(this.removedButAboveStart);
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */