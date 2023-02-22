/**
 * @param {string} s
 * @return {boolean}
 */
var parseInput = function(s) {
    let x = s.toLowerCase();
    x = x.replace(/\W/g, '');
    x = x.replace('_', '');
    
    return x;
}



var isPalindrome = function(s) {
    s = parseInput(s);
    let midpoint = Math.floor(s.length/2);
    for (var i = 0; i<= midpoint; i++) {
        if (s.charAt(i) !== s.charAt(s.length - 1 - i)) {
            return false;
        }
    }
    
    return true;
    
    
};