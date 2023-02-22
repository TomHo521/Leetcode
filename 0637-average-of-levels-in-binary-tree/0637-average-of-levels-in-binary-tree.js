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
var averageOfLevels = function(root) {
    
    var queue = [];
    queue.push(root);
    var levelLength = 1;
    var levelSum = 0;
    var outputQueue = [];
    
    while (queue.length > 0) {
        
        
        var currentLevel = [];
        
        for (var i = 0; i < levelLength; i++) {
            var currentNode = queue.shift();
            if (currentNode) {
                levelSum += currentNode.val;
                if (currentNode.left) {
                    currentLevel.push(currentNode.left);
                }

                if (currentNode.right) {
                    currentLevel.push(currentNode.right);
                }
            } else {
                // if on the off chance an empty node is processed, dont let it 
                // change the average
                levelLength--;
            }
        }
        outputQueue.push(levelSum / levelLength);
        queue = currentLevel;
        levelLength = currentLevel.length;
        levelSum = 0;
    }
    
    return outputQueue;
    
};