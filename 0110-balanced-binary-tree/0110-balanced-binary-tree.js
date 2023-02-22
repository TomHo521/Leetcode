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
 * @return {boolean}
 */

 var maxDepth = function(targetNode) {
     if (!targetNode) {
         return 0;
     }
     
     let leftDepth = 1 + maxDepth(targetNode.left);
     let rightDepth = 1 + maxDepth(targetNode.right);

     return Math.max(leftDepth, rightDepth);
 }

var isBalanced = function(root) {

    if (!root) {
        return true;
    }

    let l = maxDepth(root.left);
    let r = maxDepth(root.right);
    let balanced = Math.abs(l - r) <= 1;

    return balanced && isBalanced(root.left) && isBalanced(root.right);
    //return false;

};