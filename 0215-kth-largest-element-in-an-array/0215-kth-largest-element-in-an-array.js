/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class maxHeap {
    constructor() {
        this.size = 0;
        this.arr = [];
    }

    swap(i,j) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }

    hasParent(i) {
        return i - 1;
    }

    insert(val) {
        this.arr.push(val);

        let i = this.arr.length - 1;
        while (this.hasParent(i)) {
            let parent = Math.floor(i/2);
            if (this.arr[i] > this.arr[parent]) {
                this.swap(i,parent);
                i = parent;
            } else {
                break;
            }
        }
    }

    poll() {
        let val = this.arr[0];
        this.swap(0, this.arr.length - 1);
        this.arr.pop();

        this.heapifyDown(0);

        return val;
    }

    heapifySeparate(array) {
        //start heapifying at the first parent node.
        let i = array.length - 1;
        i = Math.floor(i/2);

        for (var j = i; j >= 0; j--) {
            let k = j;
            while (k > 0) {
                let parent = Math.floor(k/2);
                if (array[k] > array[parent]) {
                    let temp = array[k];
                    array[k] = parent;
                    array[parent] = temp;
                }
                k = parent;
            }
        }
    }

    //heapify "looks down"
    heapifyDown(i) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let largest = i;

        if (left < this.arr.length && this.arr[left] > this.arr[largest]) {
            largest = left;
        }  
        // this.printHeap();
        // console.log(`heapifyDown: i:${i}, left:${left} right:${right} largest${largest} `);

        //if the largest of the two isn't larger than i, then dont swap, we are done.
        if (right < this.arr.length && this.arr[right] > this.arr[largest]) {
            largest = right;
        }  

        if (largest !== i) {
            this.swap(largest, i);

            if (largest < this.arr.length /2) {
                this.heapifyDown(largest);
            }
            
        }
    }

    heapify() {
        //find the largest power of two that fits into length.
        //or can we divide by two?

        let firstNonChild = Math.floor(this.arr.length /2) - 1;

        for (var j = firstNonChild; j >= 0; j--) {
            this.heapifyDown(j);
        }
    }

    buildHeap(array) {
        this.arr = [...array];
        this.heapify();
        //array.forEach(e => this.insert(e));
    }

    printHeap() {
        console.log(this.arr);
    }
}

var findKthLargest = function(nums, k) {
    let newHeap = new maxHeap();

    newHeap.buildHeap(nums);
    //newHeap.printHeap();
    
    // let res = 3;
    let res = newHeap.poll()
    for (var i = 1; i < k; i++) {
        res = newHeap.poll();
        //newHeap.printHeap();
    }

    return res;
    
};