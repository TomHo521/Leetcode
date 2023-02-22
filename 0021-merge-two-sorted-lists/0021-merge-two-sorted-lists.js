/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    var head1 = list1, head2 = list2;
    var masterHead = null;
    var masterTracker = null;
  
    
    if (!list1) {
        return list2;
    } 
    
    if (!list2) {
        return list1;
    }
    
    if (head1.val < head2.val) {
        
        masterHead = head1;
        masterTracker = head1;
        head1 = head1.next;
    } else {
        
        masterHead = head2;
        masterTracker = head2;
        head2 = head2.next;
        //console.log(`masterTracker.val: ${masterTracker.val}`);
    }
    
    //base case
    while ((head1 !== null) && (head2 !== null)) {
        
        
        if (!head1) {
            while (head2) {
                masterTracker.next = head2;
                masterTracker = masterTracker.next;
                //console.log(`masterTracker.val in while: ${masterTracker.val}`);
                head2 = head2.next;
                
                // if (head2) {
                //     console.log('advancing head two: ', head2.val);
                // }
            }
        }
        
        if (!head2) {
            while (head1) {
                masterTracker.next = head1;
                masterTracker = masterTracker.next;
                //console.log(`masterTracker.val: in while ${masterTracker.val}`);
                
                head1 = head1.next;
                //if (head1) {
                    //console.log('advancing head one: ', head1.val);
                //}
            }
        }
        
        if (head1.val < head2.val) {
            //console.log(`now comparing head1: ${head1.val} with head2: ${head2.val} `);
            masterTracker.next = head1;
            masterTracker = masterTracker.next;
            //console.log(`masterTracker.val: ${masterTracker.val}`);
            
            head1 = head1.next;
            // if (head1) {
            //     console.log('advancing head one: ', head1.val);
            // }
            
        } else {
            //console.log(`now comparing head1: ${head1.val} with head2: ${head2.val} `);
            
            masterTracker.next = head2;
            masterTracker = masterTracker.next;
            //console.log(`masterTracker.val: ${masterTracker.val}`);
            
            head2 = head2.next;
            // if (head2) {
            //     console.log('advancing head two: ', head2.val);
            // }
            
        }
    }
    
    //console.log('while loop departed: ');
    
    if (head1) {
        masterTracker.next = head1;
    } else {
        masterTracker.next = head2;
    }
    
    
    return masterHead;
};