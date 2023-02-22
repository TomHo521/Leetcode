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
 * @param {number} targetSum
 * @return {number}
 */

var pathSumBacktracking = function(root, targetSum, path, pathArrays, continuity) {

    if (!root) {
        return 0;
    }

    let pathSumCount = 0;
    if (root.val === targetSum) {
        //path.push(root.val)
        pathSumCount++;
        //pathArrays.push(path.slice(0));
        //path.pop()
        //console.log([pathArrays])
    }

    //path.push(root.val);
    let leftCount = pathSumBacktracking(root.left, targetSum - root.val, path, pathArrays, true );
    //path.pop();

    if (!continuity) {
        leftCount += pathSumBacktracking(root.left, targetSum, path, pathArrays, false);
    }
    

    //path.push(root.val);
    let rightCount = pathSumBacktracking(root.right, targetSum - root.val, path, pathArrays, true);
    //path.pop();

    if (!continuity) {
        rightCount += pathSumBacktracking(root.right, targetSum, path, pathArrays, false);
    }

    return pathSumCount + leftCount + rightCount;
}

var pathSum = function(root, targetSum) {

    let path = [];
    let pathArrays = [];
    let res = pathSumBacktracking(root, targetSum, path, pathArrays, false);

    //console.log(pathArrays);

    return res;
    
};




// var prefixSum = function(arr, target) {
//     var prefix = {};
    
//     for(var )

// }

// var pathSumIII = function (root, targetSum, path) {

//      if (!root) {
//         return 0;
//     }
    
//     // let hit = 0;
//     //console.log(`now comparing targetSum ${targetSum} - root.val ${root.val}`);
//     // if (targetSum - root.val === 0) {
//     //     hit = 1;
//     //     console.log(`hit from ${targetSum} - root.val ${root.val}`);
//     // }

//     // let leftSumPassThrough = 0;

//     // if (root.left && (path.length === 0)) {
//     //     leftSumPassThrough = pathSum(root.left, targetSum, path);
//     // }

//     // let rightSumPassThrough = 0;

//     // if (root.right && (path.length === 0)) {
//     //     rightSumPassThrough = pathSum(root.right, targetSum, path);
//     // }

//     path.push(root.val);
//     console.log('path: ', path);
//     let leftSums = pathSumIII(root.left, targetSum - root.val, path);
//     let rightSums = pathSumIII(root.right, targetSum - root.val, path);
//     path.pop();

//     //return leftSums + hit + leftSumPassThrough + rightSums + rightSumPassThrough
//     return 0;
// }

// var pathSum = function(root, targetSum) {
//     return pathSumIII(root, targetSum, []);
// };

