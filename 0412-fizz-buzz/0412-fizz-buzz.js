/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {

    var res = [];
    for (var i = 1; i <= n; i++) {

        let next = '';
        
        if (i % 3 === 0) {
            next += "Fizz";
        }

        if (i % 5 === 0) {
            next += "Buzz";
        }

        if (next === '') {
            res.push(i.toString());
        } else {
            res.push(next);
        }

    }

    return res;
    
};