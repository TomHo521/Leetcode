/**
 * @param {string} s
 * @return {string}
 */
var isPalindrome = function(s) {
    
    if (s.length === 2) {
        return (s[0] === s[1]);
    }
        
    if (s.length >= 3) {
        var i = 0;
        var midpoint = Math.floor(s.length/2);
        while (i < midpoint) {    
            if (s[i] !== s[s.length - 1 - i]) {
                return false;
            }       
            i++;
        }
        return true;
    }
    return false;
}


var longestPalindrome = function(s) {
    
    // we start our search at 2;
    
    var longestFound = s[0];
        
    for (var searchLength = 2; searchLength < s.length + 1; searchLength++) {
        
        var counter = 0, test = false;
        
        while ((!test) && (counter + searchLength < s.length + 1)) {
           
            if (isPalindrome(s.slice(counter, counter+searchLength))) {
                longestFound = s.slice(counter, counter+searchLength);
                test = true;
            }
            counter++;
        }
    }
    
    return longestFound;
};