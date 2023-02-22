# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:


    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:

        if not root:
            return []
        
        if not root.left and not root.right:
            if root.val == targetSum:
                return [[root.val]]
            return []

        path = [root.val]
        res = []
        def DFS(root, targetSum, path):
            
            if not root:
                return
            if not root.left and not root.right and root.val == targetSum:
                res.append(path[:])
                return
                
            if root.left:
                path.append(root.left.val)
                DFS(root.left, targetSum - root.val, path)
                path.pop()

            if root.right:
                path.append(root.right.val)
                DFS(root.right, targetSum - root.val, path)
                path.pop()
        
        DFS(root, targetSum, path)
     
        return res