/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    var firstSum = l1.val + l2.val;
    var carry = 0;
     
    if (firstSum > 9) {
        firstSum = firstSum - 10;
        carry = 1;
    }
    
    var solutionListTracker = new ListNode(firstSum, null);
    var solutionHead = solutionListTracker;
    
    l1 = l1.next;
    l2 = l2.next;
            
    while ((l1 !== null) || (l2 !== null)) {
        
        let l1_digit, l2_digit;
        
        if (l1 === null) {
            l1_digit = 0;
        } else {
            l1_digit = l1.val;
        }
        
        if (l2 === null) {
            l2_digit = 0;
        } else {
            l2_digit = l2.val;
        }
        
        let digitSum = l1_digit + l2_digit + carry;
        
        if (digitSum > 9) {
            digitSum = digitSum - 10;
            carry = 1;
        } else {
            carry = 0;
        }
        solutionListTracker.next = new ListNode(digitSum, null);
        
        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }
       
        solutionListTracker = solutionListTracker.next;
    }
    
    if (carry === 1) {
        solutionListTracker.next = new ListNode(carry, null);
    }
    
    return solutionHead;
    
    
   
};