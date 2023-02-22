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
 * @return {number}
 */
var isLeaf = function(node) {
    if (!node) {
        return false;
    }
    
    return (!node.left) && (!node.right);
}

var sumOfLeftLeaves = function(root) {
    
    if (!root) {
        return 0;
    }
    
    if (isLeaf(root.left)) {
        return root.left.val + sumOfLeftLeaves(root.right)
    } 
    
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);

    
};