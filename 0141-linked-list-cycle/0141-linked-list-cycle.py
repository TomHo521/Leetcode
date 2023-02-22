# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if not head:
            return False

        if not head.next:
            return False
        
        temp = 0
        turtle = head
        rabbit = head

        #edge cases
        if head.next == head:
            return True
        
        if not rabbit.next.next:
            return False

        while rabbit.next:
            turtle = turtle.next
            rabbit = rabbit.next

            if not rabbit.next:
                return False
            else:
                rabbit = rabbit.next
                
            if turtle == rabbit:
                return True
            temp +=1
        
        return False
