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


    // if (!root) {
    //     return true;
    // }

    // if (root.left) {
    //     if (root.left.val >= root.val) {
    //         return false;
    //     } 
    // }

    // if (root.right) {
    //     if (root.right.val <= root.val) {
    //         return false;
    //     }
    // }

    // // console.log('now calling isValidBST with: ', root.left.val);
    // let leftCallStack = isValidBST(root.left);

    // let rightCallStack = isValidBST(root.right);

    // return leftCallStack && rightCallStack;
};