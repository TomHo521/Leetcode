/**
 * @param {string[]} strs
 * @return {string}
 */


var longestCommonPrefix = function(strs) {
    
    var overallPrefix = "";

    for (var prefixIndex = 0; prefixIndex < strs[0].length; prefixIndex++) {
        
        var currentChar = strs[0][prefixIndex];
        for (var i = 0; i < strs.length; i++) {
            // if not equal at any time, return longest common prefix
            if (strs[i][prefixIndex] !== currentChar) {
                return overallPrefix;
            }
        }

        // else add the next character to the longest common prefix.
        overallPrefix += currentChar;
    }
    
    return overallPrefix;
    
};