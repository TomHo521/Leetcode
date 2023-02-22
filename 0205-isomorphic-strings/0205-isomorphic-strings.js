/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
  
    var sMap = {}, tMap = {};
    
    for (var i = 0; i < s.length; i++) {
        // if (s[i] !== t[i]) {
            if (!(s[i] in sMap)) 
                sMap[s[i]] = t[i];
            else {
                if (sMap[s[i]] !== t[i]) {
                    return false;
                }
            }
            
            if (!(t[i] in tMap)) 
                tMap[t[i]] = s[i];
            else {
                if (tMap[t[i]] !== s[i]) {
                    return false;
                }
            }
        // }
    }
    
//     for (var x in sMap) {
//         if (!(sMap[x] in tMap)) {
//             return false;
//         }
//     }
    
//     for (var x in tMap) {
//         if (!(tMap[x] in sMap)) {
//             return false;
//         }
//     }
    
//     console.log(sMap);
//     console.log(tMap);
//     console.log('s: ', s);
//     console.log('t: ', t);
//     console.log('sCopy: ', sCopy);
//     console.log('tCopy: ', tCopy);
//     console.log(sMap)
    
    return true;

};