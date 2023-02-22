/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var BST = (arr, target) => {

    if (!arr) {
        console.log('error');
        return false;
    }

    let mid = Math.floor(arr.length/2);

    if (target === arr[mid]) {
        return mid;
    } 

    if (arr.length === 1) {
        return 'x';
    }

    if (target < arr[mid]) {

        let result = BST(arr.slice(0, mid), target);
        if (result === 'x') {
            return 'x';
        }

        return result;

    } else {
        let result = BST(arr.slice(mid), target);
        if (result === 'x') {
            return 'x';
        }

        return result;
    }

}

var findArrayBST = (matrix, target) => {

    let mid = Math.floor(matrix.length/2);

    console.log(`is ${target} between range: ${matrix[mid][0]} to ${matrix[mid][matrix[mid].length-1]}`);

    if (target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length-1]) {
        return mid;
    } else {
        console.log(`${target} was not between ${matrix[mid][0]} to ${matrix[mid][matrix[mid].length-1]}`);


    }

    if (matrix.length === 1) {
        return 'x';
    }

    if (target < matrix[mid][0]) {
        let result = findArrayBST(matrix.slice(0, mid), target)
        if (result === 'x') {
            return 'x';
        }
        return result;
    } else {
        let result = findArrayBST(matrix.slice(mid), target);
        if (result === 'x') {
            return 'x';
        }
        return mid + result;
    }
    
};

var searchMatrix = function(matrix, target) {

    let matrixIndex = findArrayBST(matrix, target);

    if (matrixIndex === 'x') {
        console.log('matrixIndex not found');
        return false;
        
    } else {
        let r = matrix[matrixIndex][matrix[0].length-1];
        console.log(`index: ${matrixIndex} between ${matrix[matrixIndex][0]} and ${r} `);

    }
    
    let arrayIndex = BST(matrix[matrixIndex], target);

    console.log('arrayIndex: ', arrayIndex);

    if (arrayIndex === 'x') {
        return false;
    }

    return true;

    
};