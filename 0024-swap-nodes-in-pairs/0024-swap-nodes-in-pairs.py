# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
   
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:

        LLstack = []
        if not head:
            return None
        if not head.next:
            return head

        tracker = head

        while tracker.next:
            LLstack.append(tracker)
            tracker = tracker.next 
        
        LLstack.append(tracker)

        lastNext = tracker.next

        if len(LLstack) % 2 == 1:
            lastNext = LLstack.pop()
        
        while len(LLstack) > 0:
            latterNode = LLstack.pop()
            formerNode = LLstack.pop()
            latterNode.next = formerNode
            formerNode.next = lastNext
            lastNext = latterNode

        head = latterNode

        return head
