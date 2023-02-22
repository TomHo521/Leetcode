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
 * @return {number[]}
 */


 //motivation:  I started off this problem by reviewing how inorder, preorder, and postorder traversals traverse a tree to refresh my memory.  

 //Notably, pre, in, and postorder traversals are determined by where the root is processed, but with left always going first.
 //preorder = root, left, right
 //inorder = left, root, right
 //postorder = left right, root

 //but what about?
 //

var preOrder = function(root, level, path) {
  
    if (!root) {
        return;
    }
        
    if (path.length < level) {
        path.push(root.val);
    }

    preOrder(root.right, level + 1, path);
    preOrder(root.left, level + 1, path);
}

var rightSideView = function(root) {
    let path = [];
    let level = 0;
    preOrder(root, 1, path);
    
    return path;
};