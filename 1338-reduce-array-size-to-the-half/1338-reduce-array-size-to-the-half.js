/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let countOccurences = {}
    arr.forEach(e => {
        if (e in countOccurences) {
            countOccurences[e]++;
        } else {
            countOccurences[e] = 1;
        }
    });

    let order = Object.keys(countOccurences).sort((a,b) => countOccurences[b] - countOccurences[a]);
    let setCount = 0;
    let mid = Math.min(arr.length/2);
    let i = 0;
    while (setCount < mid) {
        setCount += countOccurences[order[i]]
        i++;
    }

    return i

};