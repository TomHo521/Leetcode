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

//mergeSort 
var mergeList = function(list1Head, list2Head) {

    if (!list1Head) {
        return list2Head;
    } 

    if (!list2Head) {
        return list1Head;
    } 

    let tracker1 = list1Head;
    let tracker2 = list2Head;
    let mergedListHead = null;
    let mergedListTracker = null;
    
    if (list1Head.val < list2Head.val) {
        mergedListHead = list1Head;
        tracker1 = tracker1.next;
    } else {
        mergedListHead = list2Head;
        tracker2 = tracker2.next;
    }

    mergedListTracker = mergedListHead;

    while (tracker1 && tracker2) {
        if (tracker1.val < tracker2.val) {
            mergedListTracker.next = tracker1;
          
            tracker1 = tracker1.next;
            mergedListTracker = mergedListTracker.next;
        } else {
            mergedListTracker.next = tracker2;
           
            tracker2 = tracker2.next;
            mergedListTracker = mergedListTracker.next;
        }
        
    }

    if (tracker1) {
        mergedListTracker.next = tracker1;
    } else {
        mergedListTracker.next = tracker2;
    }

    return mergedListHead;
}

//returns an array comprising the pointer to the head of list 1, 
//and list 2.
var splitList = (head) => {

    if (!head) {
        return null;
    }

    if (!head.next) {
        return [head, null];
    }

    if (!head.next.next) {
        let temp = head.next;
        head.next = null;
        return [head, temp];
    }

    //else get midpoint
    let rabbitTracker = head.next;
    let turtleTracker = head;

    while (rabbitTracker.next) {
        rabbitTracker = rabbitTracker.next;

        if (rabbitTracker.next) {
            rabbitTracker = rabbitTracker.next;
            turtleTracker = turtleTracker.next;

            if (!rabbitTracker.next) {
                let temp = turtleTracker;
                turtleTracker = turtleTracker.next;
                temp.next = null;
                break;
            }
        } else {
            let temp = turtleTracker;
            turtleTracker = turtleTracker.next;
            temp.next = null;
            break;
        }
    }

    return [head, turtleTracker];

}

var printList = (list) => {
    while (list) {
        console.log(list.val, ' ');
        list = list.next;
    }
}


//High Level Explanation:
//Take a list, split it into a left half and right half.
//Return the mergeList of the recursively split halfs.

//wrote a separate function for splitting the list
//wrote a separate function for merging the two lists.
//wrote a separate function to print the list to better view results.

var sortList = function(head) {
    
    if (!head || !head.next) {
        return head;
    }
    let result = splitList(head);
    let l = result[0];
    let r = result[1];

    return mergeList(sortList(l) , sortList(r)); 
};





// console.log('head')
//     printList(l);
//     console.log('mid');
//     printList(r);

//     //split of head
//     let leftSide = splitList(l);
//     let rightSide = splitList(r);

//     console.log('split of head l:');
//     printList(leftSide[0]);
//     console.log('split of head r: ');
//     printList(leftSide[1]);

//     let lr1 = mergeList(leftSide[0], leftSide[1]);
//     console.log('merge lr: ', lr1);
//     //split of mid.
//     console.log('split of mid l: ');
//     printList(rightSide[0]);
//     console.log('split of mid r: ');
//     printList(rightSide[1]);
//     let lr2 = mergeList(rightSide[0], rightSide[1]);
//     console.log('merge lr: ', lr2);
//     console.log('merge all: ', mergeList(lr1, lr2));

    
//     // console.log('merged');
//     // let temp = mergeList(head, turtleTracker);
//     // printList(temp);
//     return null;

//     //return mergeList(sortList(head), sortList(turtleTracker));


