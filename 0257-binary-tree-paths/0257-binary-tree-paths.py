# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathToString(self, path):
        res = ''
        for i in range(len(path) - 1):
            res += str(path[i]) + '->'
        res += str(path[len(path)-1])
        return res


    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        res = []
        def dfsBackTrack(root, path):
            if not root:
                return
            if not root.left and not root.right:
                res.append(self.pathToString(path))
            
            if root.left:
                path.append(root.left.val)
                dfsBackTrack(root.left, path)
                path.pop()

            if root.right:
                path.append(root.right.val)
                dfsBackTrack(root.right, path)
                path.pop()
        

        startingPath = [root.val]
        dfsBackTrack(root, startingPath)
        return res