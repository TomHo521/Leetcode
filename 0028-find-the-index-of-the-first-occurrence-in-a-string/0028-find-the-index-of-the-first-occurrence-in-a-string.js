/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    var found = true;
    
    if (needle.length === 0) return 0;
    if (needle.length > haystack.length) return -1;
    
    const maxSearch = haystack.length - needle.length + 1;
    
    for (var i = 0; i < maxSearch; i++) {
      
        let j = 0;
        while ((haystack[i + j] === needle[j]) && (j < needle.length)) {
            j++;
        }
        
        if (j === needle.length) {
            return i;
        }
    }
        
    return -1;
    
};