/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    var res = [];
    var m = matrix.length - 1;
    var n = matrix[0].length - 1;
    let totalLength = matrix[0].length * matrix.length;
    console.log('totallength: ', totalLength);

    console.log('m: ', m, 'n: ', n);

    let xLowerBound = 0, yLowerBound = 0;
    let counter = 0;

   while (res.length < totalLength) {
       
        // from left to right
        for (let x = xLowerBound; x <= n; x++) {
            if (!matrix[yLowerBound]) {
                console.log('LR: undefined at: ', 'x: ', x, 'm: ', m, 'n: ', n);
                return res;
            } else {
                if (res.length < totalLength) {
                    res.push(matrix[yLowerBound][x]);
                }
                else {
                    return res;
                }   
            }
        }
        //once we finish the left to right, we increment the lowerBound of y since we are done.
        yLowerBound++;

        // from up to down
        for (let y = yLowerBound; y <= m; y++){
            if (!matrix[y]) {
                console.log('UD: undefined at: ', 'y: ', y, 'm: ', m, 'n: ', n);
                return res;
            } else {
                if (res.length < totalLength) {
                    res.push(matrix[y][n]);
                }
                else {
                    return res;
                }   
            }
        }
        //once we finish the up to down, we decrement the upperBound of the x length, we are done.
        n--;

        // from right to left
        for (let x = n; x >= xLowerBound; x--) {
            console.log('current value of x: ', x);
            if (!matrix[m]) {
                console.log('RL: undefined at: ', 'x: ', x, 'm: ', m, 'n: ', n);
                return res;
            } else {
                if (res.length < totalLength) {
                    res.push(matrix[m][x]);
                }
                else {
                    return res;
                }   
            }
        }
        //once we finish the right to left, we decrement the upperBound of the y length, we are done.
        m--;

        // from down to up
        for (let y = m; y >= yLowerBound; y--) {
            if (!matrix[y]) {
                console.log('DU: undefined at: ', 'y: ', y, 'm: ', m, 'n: ', n);
                return res;
            } else {
                

                if (res.length < totalLength) {
                    res.push(matrix[y][xLowerBound]);
                }
                else {
                    return res;
                } 
            }
        }
        xLowerBound++;
        counter++;
    }


    console.log(res, 'length: ', res.length);
    return res;
};


    // // from up to down
    // for (; y < n; y++) {   
        // if (!matrix[y]) {
        //     console.log('undefined at: ', 'y: ', y, 'x: ', x);
        // } else {
        //     res.push(matrix[y][x]);
        // }
    // }