/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var sObj = (s) => {
    let obj = {};
    for (var i = 0; i < s.length; i++) {
        if (s[i] in obj) {
            obj[s[i]]++;
        } else {
            obj[s[i]] = 1;
        }
    }
    return obj;
}

var canConstruct = function(ransomNote, magazine) {

    let magChars = sObj(magazine);
    let ranChars = sObj(ransomNote);
    console.log(magChars);
    console.log(ranChars);
    //let rArray = Object.keys(ranChars);

    //let res = true;

    for (let e of Object.keys(ranChars)) {
        if (e in magChars) {
            if (magChars[e] < ranChars[e]) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true; 
};