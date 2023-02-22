class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        res = 0
        #minheap by default
        heapq.heapify(nums)
        while (len(nums) > 0):
            #once we get rid of the zeroes...
            while (len(nums) > 0 and nums[0] == 0):
                heapq.heappop(nums)
            #we do the operation
            if len(nums) == 0:
                return res
            res +=1
            smallest = nums[0]
            for i in range(len(nums)):
                nums[i] -= smallest

        return res
