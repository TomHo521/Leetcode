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
var isValidSubtreeLeft = function(root, query) {

    if (!root) {
        return true;
    }
    if (root.val >= query) {
        return false;
    }
    return isValidSubtreeLeft(root.left, query) && 
           isValidSubtreeLeft(root.right, query);
}

var isValidSubtreeRight = function(root, query) {

    if (!root) {
        return true;
    }
    if (root.val <= query) {
        return false;
    }
    return isValidSubtreeRight(root.left, query) && 
           isValidSubtreeRight(root.right, query);
}


var isValidBST = function(root) {

    if (!root) {
        return true;
    }

    let currentQuery = isValidSubtreeLeft(root.left, root.val) && 
                       isValidSubtreeRight(root.right, root.val);

    return currentQuery && isValidBST(root.left) && isValidBST(root.right);
};