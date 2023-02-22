/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    
    var tracker = head;
    var halfTracker = head;
    var flipFlop = false;
    
    while (tracker) {
        tracker = tracker.next;
        if (flipFlop) {
            halfTracker = halfTracker.next;
        }
        flipFlop = !flipFlop;
    }
    
    return halfTracker;
    
};