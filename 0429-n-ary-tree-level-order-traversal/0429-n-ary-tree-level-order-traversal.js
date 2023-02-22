/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

    if (!root) {
        return [];
    }

    let queue = [root];
    let res = [];
    let levelLength = 1;

    while (queue.length > 0) {

        let nextLevel = [];
        let nextResOutput = [];

        for (var j = 0; j < levelLength; j++) {
            next = queue.shift();
            if (next) {
                nextResOutput.push(next.val);
                if (next.children) {
                    for (var i = 0; i < next.children.length; i++) {
                       
                        nextLevel.push(next.children[i]);
                    }
                }
            }
        }
        levelLength = nextLevel.length;
        res.push(nextResOutput);
        queue = nextLevel;
    }

    return res;
    
};