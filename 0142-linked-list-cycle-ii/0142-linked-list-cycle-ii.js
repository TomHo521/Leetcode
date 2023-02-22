/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    let hare = head, turtle = head;
    let flipFlop = false;
    // let steps = {
    //     hare: 0,
    //     turtle: 0,
    // }

    while (hare) {
        hare = hare.next;
        // steps.hare++;
        
        if (flipFlop) {
            turtle = turtle.next;
            // steps.turtle++;
        }
        flipFlop = !flipFlop;
        
        if (turtle == hare) {
            // console.log('hare and turtle met @: ', steps.hare, ' turtle: ', steps.turtle);
            // console.log('hare: ', hare.val, ' turtle: ', turtle.val);
            // steps.hare = 0;
            hare = head;
            // console.log('before loop entry: ', hare.val);
            // console.log('before loop entry: ', turtle.val);
            // console.log('flipflop: ', flipFlop);
            if (flipFlop) {
                turtle = turtle.next;
            }
            //turtle = turtle.next;
            while ((hare !== turtle)) {
            
                // console.log('current val Hare: ', hare.val);
                // console.log('current val turtle: ', turtle.val);
                hare = hare.next;
                turtle = turtle.next;
            }
            // console.log('final value hare: ', hare.val);
            // console.log('final value turtle: ', turtle.val);
            return turtle;
        }
    }
    
    return null;
};