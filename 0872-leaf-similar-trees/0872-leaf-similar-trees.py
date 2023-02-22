# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:


    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:

        def leafListDFS(root):
            if not root:
                return []

            if not root.left and not root.right:
                return [root.val]
            
            leftList = leafListDFS(root.left)
            rightList = leafListDFS(root.right)
            return leftList + rightList

        r1 = leafListDFS(root1)
        r2 = leafListDFS(root2)
        if len(r1) != len(r2):
            return False

        for i in range(len(r1)):
            if r1[i] != r2[i]:
                return False

        return True


            



