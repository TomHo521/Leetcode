"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

from collections import deque

class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        if not root:
            return
        if not root.left and not root.right:
            root.next = None
            return root

        root.next = None
        q = deque([root])
   
        while q:
            newLevel = []
            for i in range(len(q)):
                current = q.popleft()
                if (current.left):
                    newLevel.append(current.left)
                if (current.right):
                    newLevel.append(current.right)
            
            for ithNode in range(1, len(newLevel)):
                newLevel[ithNode - 1].next = newLevel[ithNode]
            
            if len(newLevel) > 0:
                newLevel[len(newLevel) - 1].next = None
          

            q += newLevel
        
        return root
        