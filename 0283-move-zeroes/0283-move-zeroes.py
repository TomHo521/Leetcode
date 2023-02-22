class Solution:
    def shift(self, start, nums):
        for i in range(start, len(nums) - 1):
            nums[i] = nums[i +1]
        return nums
            
    def moveZeroes(self, nums: List[int]) -> None:
        if len(nums) == 1:
            return nums
        """
        Do not return anything, modify nums in-place instead.
        """
        i = 0
        shiftCount = 0
        while i < len(nums) - shiftCount:
            if (nums[i] == 0):
                self.shift(i, nums)
                nums[len(nums) - 1] = 0
                i -= 1
                shiftCount += 1
            i += 1
                
        

                        
        
        return nums
            
        