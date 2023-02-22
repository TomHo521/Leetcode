/**
 * @param {string} s
 * @return {string}
 */


var reverseWord = function(s) {

    let mid = Math.round(s.length/2);
    let arr = s.split('');

    for (var i = 0; i < mid; i++) {
        let temp = arr[i];
        arr[i] = arr[s.length - i - 1];
        arr[s.length - i - 1] = temp;
    }

    return arr.join('');

}

var reverseWords = function(s) {

    return s.split(' ').map(reverseWord).join(' ');
    
};