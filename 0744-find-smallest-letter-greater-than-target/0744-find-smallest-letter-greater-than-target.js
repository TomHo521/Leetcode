/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {

    let left = 0; pivot = 0;
    let right = letters.length - 1;

    while (left <= right) {

        pivot = Math.round(left + (right - left)/2);
        if (letters[pivot] === target) {
            for (var i = pivot; i < letters.length; i++) {
                if (letters[i] > target) {
                    return letters[i];
                }
            }

            console.log('error condition');
            return letters[0];
        }

        if (letters[pivot] < target) {
            left = pivot + 1;
            
        }

        if (letters[pivot] > target) {
            right = pivot - 1;
        }
        
    }
    
    if (letters[left] === target) {
        for (var i = left; i < letters.length; i++) {
            if (letters[i] > target) {
                return letters[i];
            }
        }

        console.log('error condition');
        return letters[0];
    } 

    if (left > letters.length - 1) {
        return letters[0];
    }

    return letters[left];
    
};