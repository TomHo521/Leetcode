/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if (root === null) {
        return 0;
    }
    
    var t = 0;
    
    for (var i = 0; i < root.children.length; i++) {
        t = Math.max(t, maxDepth(root.children[i]));
    }
    
    return 1 + t;
    
};