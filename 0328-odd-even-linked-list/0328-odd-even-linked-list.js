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
var oddEvenList = function(head) {

    let odd = true;
    let oddNodeTracker = head;
    let evenNodeTracker = head;
    let evenNodeHead = null;

    if (!head) {
        return null;
    }

    if (!head.next) {
        return head;
    }

    evenNodeTracker = evenNodeTracker.next;
    evenNodeHead = evenNodeTracker;
    //nodes initializes as such.
    //node 1 (oddNodeTracker, head) node 2 (evenNodeTracker, evenNodeHead)

    //console.log('initialized at: oddTracker: ', oddNodeTracker.val, ' evenTracker: ', evenNodeTracker.val);

    while (1) {

        if (odd) {
            if (evenNodeTracker.next) {
                //console.log('upcoming value: ', evenNodeTracker.next.val, ' for oddList');
                //link the next odd linked list node
                //console.log(`now linking ${oddNodeTracker.val} with ${evenNodeTracker.next.val}`)
                oddNodeTracker.next = evenNodeTracker.next;

                //move the odd linked list on up.
                //console.log(`now moving ${oddNodeTracker.val} to ${oddNodeTracker.next.val}`)
                oddNodeTracker = oddNodeTracker.next;
            } else {
                //console.log('final value was evenNodeTracker: ', evenNodeTracker.val);
                break;
            }
        } else {
            if (oddNodeTracker.next) {
                //console.log('upcoming value: ', oddNodeTracker.next.val, ' for evenList');
                
                //link the next even linked list node
                //console.log(`now linking ${evenNodeTracker.val} with ${oddNodeTracker.next.val}`)
                evenNodeTracker.next = oddNodeTracker.next;

                //move the even linked list on up.
                //console.log(`now moving ${evenNodeTracker.val} to ${evenNodeTracker.next.val}`)
                evenNodeTracker = evenNodeTracker.next;
            } else {
                break;
            }

        }

        odd = !odd;
    }
    //we connect the end of the oddLinkedlist to the head of the evenLinkedList
    evenNodeTracker.next = null;
    oddNodeTracker.next = evenNodeHead;
    return head;
    
};