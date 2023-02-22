/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    
    if (!root) {return [];}
    return root.children.reduce((acc, i) => acc.concat(postorder(i)), []).concat([root.val]);
};