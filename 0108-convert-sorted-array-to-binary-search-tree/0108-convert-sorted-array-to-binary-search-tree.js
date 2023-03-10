/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */


var sortedArrayToBST = function(nums) {

    if (!nums || nums.length === 0) {
        return null;
    }

    if (nums.length === 1) {
        return new TreeNode(nums[0], null, null);
    }

    
    let mid = Math.floor(nums.length/2);
    let left = sortedArrayToBST(nums.slice(0, mid));
    let right = sortedArrayToBST(nums.slice(mid+1));

    var root = new TreeNode(nums[mid], left, right);

    return root;

};