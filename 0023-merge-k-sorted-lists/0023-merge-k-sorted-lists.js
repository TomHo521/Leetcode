/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeOneList = function(list1, list2) {
    
    var tracker1 = list1, tracker2 = list2;
    var finalList = { val: 'default',
                      next: null };
    var finalTracker = finalList;
    
    while ((tracker1 !== null) || (tracker2 !== null)) {
        
        if (tracker1 === null) {
            finalTracker.next = tracker2;
            finalList = finalList.next;
            return finalList;
        } 
        
        if (tracker2 === null) {
            finalTracker.next = tracker1;
            finalList = finalList.next;
            return finalList;
        }
        
        if (tracker1.val < tracker2.val) {
            finalTracker.next = tracker1;
            tracker1 = tracker1.next;
        } else {
            finalTracker.next = tracker2;
            tracker2 = tracker2.next;
        }
        finalTracker = finalTracker.next;  
    }
    
    finalList = finalList.next;
    return finalList;
}

var mergeKLists = function(lists) {
    
    if (lists.length === 0) {
        return null;
    }
    
    if (lists.length === 1) {
        return lists[0];
    }
    
    // there are at least two lists.
    
    var mergedList = lists[0];
        
    for (var i = 1; i < lists.length; i++) {
        mergedList = mergeOneList(mergedList, lists[i]);
    }
    
    return mergedList;
};