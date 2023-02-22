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
 * @param {TreeNode} q
 * @return {TreeNode}
 */


var backtracking = function(root, target, path, res) {

    if (!root) {
        return null;
    }

    if (root === target) {
        // console.log('path to: ', target.val, ' found');
        // console.log(path.slice());
        res.push(path.slice());
        return path.slice();
    }

    var result;

    if (root.left) {
        path.push(root.left);
        result = backtracking(root.left, target, path, res);
        path.pop();
    }



    if (!result) {
        if (root.right) {
            path.push(root.right);
            backtracking(root.right, target, path, res);
            path.pop();
        }
    }


    


}


var lowestCommonAncestor = function(root, p, q) {

    var path = [root];
    let pp = []; 
    backtracking(root, p, path, pp);
    pp = pp[0];

    let pq = [];
    backtracking(root, q, [root], pq);
    pq = pq[0];

    // console.log('final path to p ', pp);
    // console.log('final path to q ', pq);

    let i = 0;
    while (pp[i] === pq[i]) {
        i++;
    }

    // console.log('value of i: ', i);
    // console.log('value of pp[i]: ', pp[i]);

    return pp[i- 1];

};