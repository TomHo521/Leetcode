/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {


    if (!preorder || !inorder || preorder.length === 0 || inorder.length === 0) {
        return null;
    }

    if (preorder.length === 1) {
        return new TreeNode(preorder[0], null, null);
    }

    //find left and right subtrees.
    for (var i = 0; i < inorder.length; i++) {
        if (inorder[i] === preorder[0]) {
            break;
        }
    }

    // console.log('root found at: ', i);

    let leftTreeInOrder = inorder.slice(0, i);
    let rightTreeInOrder = inorder.slice(i + 1);
    let leftTreePreOrder = preorder.slice(1, i+1);
    let rightTreePreOrder = preorder.slice(i + 1);

    // console.log('left inorder ', leftTreeInOrder);
    // console.log('left preorder ', leftTreePreOrder);
    // console.log('right inorder ', rightTreeInOrder);
    // console.log('right preorder ', rightTreePreOrder);

    let leftTree = buildTree(leftTreePreOrder, leftTreeInOrder);
    let rightTree = buildTree(rightTreePreOrder, rightTreeInOrder);


    return new TreeNode(preorder[0], leftTree, rightTree);

};