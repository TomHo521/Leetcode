/**
 * @param {string} s
 * @return {string}
 */

var isVowel = function(c) {
    let vowels = {
        'A': true,
        'E': true,
        'I': true,
        'O': true,
        'U': true,
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
    }

    return (c in vowels);
}


var reverseVowels = function(s) {

    let l = 0;
    let r = s.length - 1;

    var arr = s.split('');
    
    while (l < r) {
        console.log('l: ', l, 'r: ', r)

        if (!isVowel(arr[l])) {
            l++;
        }

        if (!isVowel(arr[r])) {
            r--;
        }

        if (isVowel(arr[l]) && isVowel(arr[r])) {
            console.log('swapping at l: ', l, 'r: ', r)

            let temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l++;
            r--;
        } 


    }

    console.log(arr);
    return arr.join('');
    
};