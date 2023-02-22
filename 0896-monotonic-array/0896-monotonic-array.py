class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:

        dec, inc = True, True
        for i in (range(1, len(nums))):
            dec = dec and nums[i] <= nums[i-1]
            inc = inc and nums[i] >= nums[i-1]
        return dec or inc