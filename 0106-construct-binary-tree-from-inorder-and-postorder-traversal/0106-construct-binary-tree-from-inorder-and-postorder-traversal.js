/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */







var buildTree = function(inorder, postorder) {


    if (!postorder || !inorder || postorder.length === 0 || inorder.length === 0) {
        return null;
    }

    if (postorder.length === 1) {
        return new TreeNode(postorder[postorder.length - 1], null, null);
    }

    //find left and right subtrees.
    for (var i = 0; i < inorder.length; i++) {
        if (inorder[i] === postorder[postorder.length - 1]) {
            break;
        }
    }

    // console.log('root found at: ', i);

    let leftTreeInOrder = inorder.slice(0, i);
    let rightTreeInOrder = inorder.slice(i + 1);
    let leftTreePostOrder = postorder.slice(0, i);
    let rightTreePostOrder = postorder.slice(i, postorder.length - 1);

    // console.log('left inorder ', leftTreeInOrder);
    // console.log('left preorder ', leftTreePreOrder);
    // console.log('right inorder ', rightTreeInOrder);
    // console.log('right preorder ', rightTreePreOrder);

    let leftTree = buildTree(leftTreeInOrder, leftTreePostOrder);
    let rightTree = buildTree(rightTreeInOrder, rightTreePostOrder);


    return new TreeNode(postorder[postorder.length - 1], leftTree, rightTree);

};