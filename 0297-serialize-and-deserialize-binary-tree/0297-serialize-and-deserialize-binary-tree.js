/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var inOrder = function(root, path) {
    if (root == null) {
        path.push('N');
        return;
    }
    
    path.push(root.val);
    
    inOrder(root.left, path);
    inOrder(root.right, path);
    return;

}


var serialize = function(root) {

    let arr = [];

    inOrder(root, arr);
    //console.log('result: ', arr);

    return arr.join(',');
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

var buildInOrder = function(arr) {

    if (arr[0] === 'N') {
        arr.shift();
        return null;
    }

    if (!arr || arr.length === 0) {
        return;
    }

    let root = new TreeNode (arr.shift(), null, null);
    let left = buildInOrder(arr);
    let right = buildInOrder(arr);
    root.left = left;
    root.right = right;

    return root;

}

var deserialize = function(data) {

    let arr = data.split(',');
    
    //data.split(',').map(e => parseInt(e) ? parseInt(e) : null );

    console.log('serialized: ', arr);

    return buildInOrder(arr);
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */