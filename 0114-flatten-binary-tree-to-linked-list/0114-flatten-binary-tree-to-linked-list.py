# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        res = []
        def preOrder(root):
            if root:
                res.append(root)

                if root.left:
                    preOrder(root.left)
               
                if root.right:
                    preOrder(root.right)
        
        preOrder(root)
        # for i in range(0, len(res)):
        #     print(res[i].val)

        for i in range(1, len(res)):
            res[i - 1].right = res[i]
            res[i - 1].left = None

        