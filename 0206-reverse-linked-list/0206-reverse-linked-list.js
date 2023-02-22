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
var reverseList = function(head) {
    
    
    if (!head) {
        return null;
    }
    
    if (!head.next) {
        return head;
    }
    
    // 2 node case initialization
    var forward = head;
    var rear = head;
    forward = forward.next;
    rear.next = null;

    
    while (forward.next) {
        
        let tempHead = forward.next;
        forward.next = rear;
    
        rear = forward;
        forward = tempHead;        
    }
    
    forward.next = rear;
    
    return forward;
    
};