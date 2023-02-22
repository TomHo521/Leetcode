/**
 * @param {string} s
 * @return {number}
 */
var romanIndex = function(c) {
    
    if (c === 'I') {
        return 1;
    }
    if (c === 'V') {
        return 5;
    }
    if (c === 'X') {
        return 10;
    }
    if (c === 'L') {
        return 50;
    }
    if (c === 'C') {
        return 100;
    }
    if (c === 'D') {
        return 500;
    }
    if (c === 'M') {
        return 1000;
    }
}

var check49 = function(s, i) {
    
    if ((s[i] === 'I') && (s[i+1] === 'V')) {
        return 4;
    }
    if ((s[i] === 'I') && (s[i+1] === 'X')) {
        return 9;
    }   
    if ((s[i] === 'X') && (s[i+1] === 'L')) {
        return 40;
    }
    if ((s[i] === 'X') && (s[i+1] === 'C')) {
        return 90;
    }
    if ((s[i] === 'C') && (s[i+1] === 'D')) {
        return 400;
    }
    if ((s[i] === 'C') && (s[i+1] === 'M')) {
        return 900;
    }
    
    return false;
    
}


var romanToInt = function(s) {
    
    var i = 0;
    var value = 0;
        
    if (s.length === 1) {
        return romanIndex(s[0]);
    }
        
    //s.length is 2 or more
    while (i < s.length) {
        let currentValue = check49(s,i);
        if (currentValue) {
            value += currentValue;
            i+=2;
        }
        else {
            value += romanIndex(s[i]);
            i++;
        }
    }
    
    return value;
};