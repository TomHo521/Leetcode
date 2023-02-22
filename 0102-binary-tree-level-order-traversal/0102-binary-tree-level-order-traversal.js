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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var arr = [];
    if (!root) {
        return arr;
    }
    arr.push([root.val]);
    var queue = [root.left, root.right];
    var rowlength = 2;
    while (queue.length > 0) {
        let children = [];
        let nextRow = 0;
    
        for (var i = 0; i < rowlength; i++) {
            let temp = queue.shift();
            if (temp) {
                queue.push(temp.left);
                nextRow++;
                queue.push(temp.right);
                nextRow++;
                children.push(temp.val);
            }            
        }
        rowlength = nextRow; 
        if (children.length > 0) {
            arr.push(children);
        }
    }
    return arr;    
};