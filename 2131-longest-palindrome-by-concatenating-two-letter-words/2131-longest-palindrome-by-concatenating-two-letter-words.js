/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {

    doubleLetter = {};
    mirror = {}

    for (var i = 0; i < words.length; i++) {
        let nextString = words[i];

        //fish for double letters
        if (nextString[0] === nextString[1]){
            if (nextString in doubleLetter) {
                doubleLetter[nextString]++;
            } else {
                doubleLetter[nextString] = 1;
            }
        } else {
            if (nextString in mirror) {
                mirror[nextString]++;
            } else {
                mirror[nextString] = 1;
            }
        }
    }

    console.log('doubles: ', doubleLetter);
    console.log('mirrors: ', mirror);

    //parse the numbers;
    let doubleCount = 0;
    Object.keys(doubleLetter).forEach(e => {

        if (doubleLetter[e] % 2 === 0) {
            doubleCount += doubleLetter[e] * 2;
            doubleLetter[e] = 0;
        } else {
            doubleLetter[e]--;
            doubleCount += doubleLetter[e] * 2;
            doubleLetter[e] = 1;
        }
    });

    let core = false;

    Object.keys(doubleLetter).forEach(e => {
        if ((doubleLetter[e] - 1 >= 0) && (!core)) {
            core = true;
            doubleCount += 2;
        }    
    });

    let mirrorCount = 0;
    Object.keys(mirror).forEach(e => {
        let mirroredKey = e[1] + e[0];
        //console.log('mirroredKey: ', mirroredKey);

        if (mirroredKey in mirror) {
            while ((mirror[e] - 1 >= 0) && (mirror[mirroredKey] - 1 >= 0)) {
                mirror[e]--;
                mirror[mirroredKey]--;
                mirrorCount += 4 ;
            }
        } 
    });

    console.log(`doubles: ${doubleCount} mirror: ${mirrorCount}`);
    console.log('doubles: ', doubleLetter);
    console.log('mirrors: ', mirror);


    return doubleCount + mirrorCount;


};