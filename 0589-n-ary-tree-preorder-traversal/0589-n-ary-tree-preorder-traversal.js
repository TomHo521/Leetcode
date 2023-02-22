/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {

    if (!root) {
        return [];
    }

    let array = [root.val];    
    if (!root.children) {
        return array;
    }

    let children = [];
    for (var i = 0; i < root.children.length; i++) {
        let x = [];
        if (root.children[i]) {
            //console.log('now going through child: ', root.children[i].val);
            x = preorder(root.children[i]);
        }
        
        //console.log('result of preorder: ', x);
        if (x) {
            children = children.concat(x);
        }
        //console.log('status of children: ', children);
    }

    return array.concat(children);
};