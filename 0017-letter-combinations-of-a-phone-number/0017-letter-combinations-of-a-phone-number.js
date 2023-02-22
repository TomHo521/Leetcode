/**
 * @param {string} digits
 * @return {string[]}
 */

var backtracking = function(digits, level, path, res, dictionary) {


    if (level === digits.length) {
        res.push(path.join(''));
        return;
    }

    //gets the array of characters for the current digit.
    let current = dictionary[digits[level]];
    //console.log('current set of chars: ', current);

    for (var i = 0; i < current.length; i++) {
        path.push(current[i]);
        //console.log(`current char ${current[i]} pushed into path array: ${path}`);
        backtracking(digits, level+1, path, res, dictionary);
        path.pop();
    }

}

var letterCombinations = function(digits) {

    if (digits.length === 0) {
        return []
    }

    var path = [], res = [];

    var dictionary = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r', 's'],
        8: ['t','u','v'],
        9: ['w','x','y','z'],
    }

    backtracking(digits, 0, path, res, dictionary);

    return res;
    
};