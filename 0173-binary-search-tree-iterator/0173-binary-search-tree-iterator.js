/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */



var BSTIterator = function(root) {

    this.recursionStack = [];

    this.InOrderBST = function(root) {
        if (!root) {
            return
        }
        if (root.left) {
            this.InOrderBST(root.left)
        }
        
        //console.log('root: ', root)
        this.recursionStack.push(root);
        
        if (root.right) {
            this.InOrderBST(root.right);
        }
    }

    this.InOrderBST(root, this.recursionStack);
    console.log(this.recursionStack);

    this.currentIteratorNode = -Infinity;
    this.iteratorCount = 0;

};

BSTIterator.prototype.hasNext = function() {
    if (this.iteratorCount === 0 && this.recursionStack.length === 1) {
        return true;
    }

    if (this.recursionStack.length === 1) {
        return false;
    }

    return true;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {

    if (this.iteratorCount === 0) {
        this.currentIteratorNode = this.recursionStack[0];
        this.iteratorCount++;
        return this.currentIteratorNode.val;
    } else {

        if (this.hasNext()) {

            //if (this.recursionStack.length > 0) {
                this.recursionStack.shift();
                this.currentIteratorNode = this.recursionStack[0];
                this.iteratorCount++;
                return this.currentIteratorNode.val;

            //}

        }
        return 'error'
    }
};




/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */