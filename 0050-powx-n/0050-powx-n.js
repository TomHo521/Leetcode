/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPowPositive = function(x, n) {
    console.log('now evaluating for n: ', n);
    if (n === 0) {
        return 1;
    }

    if (n === 1) {
        return x;
    }

    if (n === 2) {
        return x*x;
    }

    if (n % 2 === 0) {
        result = myPowPositive(x, Math.floor(n / 2));
        return result * result;
    } else {
        result = myPowPositive(x,  Math.floor(n / 2));
        return result * result * x;
    }

    
  

}


var myPow = function(x, n) {
    return (n > 0)? myPowPositive(x, n): 1/myPowPositive(x, n * -1);
};