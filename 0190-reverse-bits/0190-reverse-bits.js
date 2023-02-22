/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let x = n.toString(2).split('').reverse();
    let missingZero = new Array(32 - x.length).fill('0');
    return parseInt([...x, ...missingZero].join(''), 2)
};