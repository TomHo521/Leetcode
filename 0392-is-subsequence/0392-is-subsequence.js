/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    if (s.length > t.length) 
        return false;
    
    var tCounter = 0;
        
    for (var i = 0; i < s.length; i++) {
        
        console.log(`now working on ${s[i]}`);
        
        while (tCounter < t.length)  {
            if (s[i] === t[tCounter]) {
                console.log(`equal at ${tCounter}`);
                break;
            }
            tCounter++;
        }
        
        if (tCounter >= t.length) 
            return false;
        
        tCounter++;
    
    }
    
    return true;
    
};