# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def constructMaximumBinaryTree(self, nums: List[int]) -> Optional[TreeNode]:
        if len(nums) == 0:
            return None
        
        #find max num
        maxIndex = 0
        maxNum = -1
        for i in range(len(nums)):
            if nums[i] > maxNum:                
                maxNum = nums[i]
                maxIndex = i
        
        
        left = self.constructMaximumBinaryTree(nums[:maxIndex])
        right = self.constructMaximumBinaryTree(nums[maxIndex+1:])

        return TreeNode(maxNum, left, right)
        