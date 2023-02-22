/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */



var cloneGraph = function(node) {

    if (!node) return null;
    const visited = new Map();

    var dfs = function(node) {
        if (visited.has(node.val)) return visited.get(node.val);
        
        console.log('val: ', node.val);

        let thisNode = new Node(node.val, []);
        visited.set(node.val, thisNode);
        
        //iterate through the children and visit
        for (neighbor of node.neighbors) {    
            let childNode = dfs(neighbor);
            //console.log('child: ', childNode.val, ' neighbors: ', thisNode.neighbors);
            thisNode.neighbors.push(childNode);
            //console.log('post push: ', thisNode.neighbors);
        }
        
        return thisNode;
    }

    return dfs(node);
};