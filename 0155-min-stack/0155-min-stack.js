var MinStack = function() {

    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.stack.length === 0) {
        this.stack.push({val:val, min:val});
        return; 
    } 

    let newObj = { val: val, min: this.getMin()};

    if (val <= newObj.min) {
        newObj.min = val;
        this.stack.push(newObj);
    } else {
        this.stack.push(newObj);
    }



};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

    return this.stack.pop().val;
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

    let e = this.stack[this.stack.length - 1];
    return e.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */