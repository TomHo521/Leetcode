class Solution:

    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        localMax = 0
        globalMax = 0
        
        for i in nums:
            if i == 1:
                localMax += 1
            else:
                localMax = 0
            globalMax = max(localMax, globalMax)
        
        return globalMax
