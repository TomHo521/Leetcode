# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque

class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        if not root.left and not root.right:
            return [[root.val]]
        res = []
        q = deque([root])
        zig = True
        while q:
            newLevel = []
            
            for i in range(len(q)):
                nodeInLevel = q.popleft()
                newLevel.append(nodeInLevel.val)

                if nodeInLevel.left:
                    q.append(nodeInLevel.left)
                if nodeInLevel.right:
                    q.append(nodeInLevel.right)

            print('newlevel: ', newLevel)
            if zig:
                zig = False
                
            else:
                zig = True
                newLevel.reverse()
            res.append(newLevel)
                
        return res
