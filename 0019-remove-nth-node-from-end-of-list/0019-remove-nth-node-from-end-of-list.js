/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {

    //strategy:  travel the list twice since we dont know the length of the list.
    let tracker = head;
    let length = 0;
    while (tracker) {
        length++;
        tracker = tracker.next;
    }
    console.log('Length of List: ', length);

    //edge case

    if (length === n) {
        head = head.next;
        return head;
    }



    // //once we find the length, we go next length - n times.
    tracker = head;
    let counter = 1;
    //we substract an additional 1 becuase we want to be one before.  
    let splicePoint = length - n;

    while (counter < splicePoint) {
        tracker = tracker.next;
        counter++;
    } 

    console.log('tracker arrived at: ', tracker.val);

    //once we are before the splice point, we merely assign the tracker to the next of the next.
    tracker.next = tracker.next.next;

    return head;

};