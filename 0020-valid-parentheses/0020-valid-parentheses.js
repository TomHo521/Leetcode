/**
 * @param {string} s
 * @return {boolean}
 */
var isCloser = function(paren1, paren2) {
    
    if ((paren1 === '{') && (paren2 === '}')) {
        return true;
    }
    
    if ((paren1 === '[') && (paren2 === ']')) {
        return true;
    }
    
    if ((paren1 === '(') && (paren2 === ')')) {
        return true;
    }
    
    return false;
}


var isValid = function(s) {
    
    var array = [];
    
    
    for (var i = 0; i < s.length; i++) {
        
        if ((s[i] === '(') ||  (s[i] === '[') ||  (s[i] === '{')) {
            array.push(s[i]);
        } else {           
            if (!(isCloser(array.pop(), s[i]))) {
                return false;
            }
        }
    }
    
    if (array.length > 0) {
        return false;
    }
    
    return true;
        
};