/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let ans = '';
    let dict =  {}

    for (var i = 1; i < 27; i++) {
        dict[i] = String.fromCharCode('a'.charCodeAt() + i - 1);
    }

    for (var i = s.length - 1; i >= 0; i--) {
        let nextChar = '';
        if (s[i] === '#') {
            i--;
            nextChar = s[i] + nextChar;
            i--;
            nextChar = s[i] + nextChar;
        } else {
            nextChar = s[i] + nextChar;
        }

        ans = dict[nextChar] + ans;
    }

    return ans;
    
};