/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    x = x.toString(2).split('');
    y = y.toString(2).split('');

    if (x.length > y.length) {
        let temp = x;
        x = y;
        y = temp;
    }

    if (y.length > x.length) {
        let temp = new Array(y.length - x.length).fill('0')
        x = [...temp, ...x];
    } 

    let hd = 0;

    for (var i = 0; i < x.length; i++) {
        if (x[i] != y[i]) {
            hd++;
        }
    }

    return hd;

    
};