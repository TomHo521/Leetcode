/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    var longest = 0;
    var substringChars = {};
    
    for (var i = 0; i < s.length; i++) {
        let currentSubstringLength = 0;
        
        for (var j = i; j < s.length; j++) {
            if (!(s[j] in substringChars)) {
                substringChars[s[j]] = s[j];
                currentSubstringLength++;
            } else {
                substringChars = {} //reset the substring character objects.
                j = s.length; //exit loop
            }
        }   
        
        if (currentSubstringLength > longest) {
            longest = currentSubstringLength;
        }
    }
    
    return longest;
};