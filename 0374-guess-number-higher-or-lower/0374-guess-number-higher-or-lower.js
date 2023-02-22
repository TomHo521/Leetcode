/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {

    let mid = n;
    let guessNumber = n;
    console.log('mid: ', mid);

    while (mid >=1) {
        
        let res = guess(guessNumber);
        if (res === 0) return guessNumber;

        mid = Math.round(mid/2); 
       
        if (res === 1) {  
            console.log(`guessNumber ${guessNumber} mid: ${mid}`);
            guessNumber += mid;
        }

        if (res === -1) {
            console.log(`guessNumber ${guessNumber} mid: ${mid}`);
            guessNumber -= mid;  
        }
    }

    return guessNumber;    
};