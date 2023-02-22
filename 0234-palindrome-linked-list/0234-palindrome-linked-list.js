/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let tracker = head;
    let array = [];
    
    //edge case
    if (!head || !head.next) {
        return true;
    }

    //convert to array
    while (tracker) {
        
        array.push(tracker.val);
        tracker = tracker.next;
    }

    //console.log(array);

    //compare left and right;
    let midpoint= Math.floor(array.length/2);
    for (var i = 0; i < midpoint; i++) {
        if (array[i] !== array[array.length - 1 - i]) {
            return false;
        }
    }
    return true;
    
};