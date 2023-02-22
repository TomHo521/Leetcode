# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:

    
    def inorderTraversal(self, root: Optional[TreeNode], arr):
        if not root:
            return
        self.inorderTraversal(root.left, arr)
        arr.append(root.val)
        self.inorderTraversal(root.right, arr)
        

    def findSecondMinimumValue(self, root: Optional[TreeNode]) -> int:
        #inorder traversal
        arr = []
        self.inorderTraversal(root, arr)
        arr.sort()
        if len(arr) > 1:
            print(arr)
            i = 1
            while i < len(arr) and arr[i] == arr[i-1]: 
                i += 1
            if i >= len(arr):
                return -1
            return arr[i]
        else:
            return -1




