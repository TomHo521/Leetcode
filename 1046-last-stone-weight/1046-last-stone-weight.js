/**
 * @param {number[]} stones
 * @return {number}
 */
var heapify = function(arr, N, i) {

    let largest = i;
    let l = 2*i + 1;
    let r = 2*i + 2;

    if (l < N && arr[l] > arr[largest]) {
        largest = l;
    }

    if (r < N && arr[r] > arr[largest]) {
        largest = r;
    }

    if (largest !== i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, N, largest);
    }


}

var heapSort = (arr) => {

    //build heap




}

var swap = function(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

var lastStoneWeight = function(stones) {

    //first build heap;

    for (var i = Math.floor(stones.length / 2) - 1 ; i >= 0; i-- ) {
        heapify(stones, stones.length, i);
    }

    while (stones.length > 1) {
        let s1 = stones[0];
        swap(stones, 0, stones.length - 1);
        stones.pop();
        heapify(stones, stones.length, 0);
    
        let s2 = stones[0];
        swap(stones, 0, stones.length - 1);
        stones.pop();
        heapify(stones, stones.length, 0);

        if (s1 !== s2) {
            stones.push(Math.abs(s1 - s2));
        }
        heapify(stones, stones.length, 0);
    }

    //console.log('value of heap: ', stones);

    //console.log('this is the value of largest ', s1, ' and second largest: ', s2);
    return stones[0] || 0;
    


    
    //console.log(stones);
    
};

