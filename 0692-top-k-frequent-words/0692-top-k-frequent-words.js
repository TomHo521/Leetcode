/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

var heapify = function(arr, N, i) {

    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let largest = i;

    //we start by assuming the largest is the root, i
    //heapify is interesting because it maintains a heap, but doesnt exactly build heap from scratch.
    //it's really kind of an oddball function 

    if (left < N && left > largest) {
        largest = left;
    }

    if (right < N && right > largest) {
        largest = right;
    }

    //so once we pick the largest to be either the right or left, we swap as such.
    if (i !== largest) {
        //swap the root with the largest if root is not the largest.

        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        //propagate change downwards
        heapify(arr, N, largest)
    }

}

var topKFrequent = function(words, k) {

 
    let freq = {};
    let freqArray = [];

    //we can start out by building the heap as we iterate through O(n)
    for (var i = 0; i < words.length; i++) {
        if (words[i] in freq) {
            freq[words[i]]++;
        } else {
            freq[words[i]] = 1;
        }
    }

    for (var x in freq) {
        freqArray.push([x, freq[x]]);
    }

    freqArray.sort((a, b) => {
        if (b[1] === a[1]) {
            //console.log('does it return equal? b: ', b[0], ' a: ', a[0]);
             return (b[0] < a[0])? 1 : -1;
         } else {
            return b[1] - a[1];
        }
        
        });

    for (var i = 0; i < freqArray.length; i++) {
        freqArray[i] = freqArray[i][0];
    }    

    return freqArray.slice(0,k);
    
};