/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inOrderBST = (root, path) => {
    if (!root) {
        return;
    }
    if (root.left) {
        inOrderBST(root.left, path)
    }
    path.push(root);
    if (root.right) {
        inOrderBST(root.right, path)
    }
}

var inorderSuccessor = function(root, p) {

    let path = [];
    inOrderBST(root, path);

    for (var i = 0; i < path.length; i++) {
        if (path[i].val > p.val) {
            return path[i]; 
        } 
    }

    return null;
};