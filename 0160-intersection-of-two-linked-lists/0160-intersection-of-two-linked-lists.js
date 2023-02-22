/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    if (!headA || !headB) {
        return null;
    }

    let trackerA = headA, trackerB = headB;
    let stackA = [headA];
    while (trackerA.next) {
        trackerA = trackerA.next;
        stackA.unshift(trackerA);
    }

    let stackB = [headB];
    while (trackerB.next) {
        trackerB = trackerB.next;
        stackB.unshift(trackerB);
    }

    if (stackA[0] !== stackB[0]) {
        return null;
    }


    var lastA = null;
    while (stackA[0] === stackB[0] && stackB.length > 0 && stackA.length > 0) {
        lastA = stackA.shift();
        stackB.shift();
    }

    return lastA;
    
};