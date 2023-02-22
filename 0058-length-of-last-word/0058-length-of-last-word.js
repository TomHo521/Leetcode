/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let length = 0;
    let wordfound = false;
    
    for (var i = s.length - 1; i >= 0; i--){
        
        if (s[i] !== ' ') {
            length++;
            wordfound = true;
        } else {
            
            if (wordfound) {
                return length;
            }
        }
    }
    
    return length;
    
};