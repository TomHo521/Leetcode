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

var isSymmetric = function(root, root2 = root) {

    if (!root && !root2) {
        return true;
    }

    if (!root && root2 || root && !root2) {
        return false;
    }

    if (root.val === root2.val) {
        return isSymmetric(root.left, root2.right) && 
               isSymmetric(root.right, root2.left);
    } 

    return false;
};