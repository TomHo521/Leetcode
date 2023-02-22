# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        
        res = []
        path = [root.val]
        def DFS(root, path):
            if not root:
                return
            if not root.left and not root.right:

                res.append(path[:])
            
            if root.left:
                path.append(root.left.val)
                DFS(root.left, path)
                path.pop()

            if root.right:
                path.append(root.right.val)
                DFS(root.right, path)
                path.pop()
        
        DFS(root, path)
        #print('res: ', res)
        total = 0
        for singlePath in res:
            tens = 1
            for val in reversed(singlePath):
                val = val * tens
                total += val
                tens *= 10
        return total


