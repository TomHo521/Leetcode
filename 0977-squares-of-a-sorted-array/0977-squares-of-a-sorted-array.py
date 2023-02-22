class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        for i in range(len(nums)):
            nums[i] = nums[i] * nums[i]
        nums.sort()
        return nums

        #note to self, return nums.sort() returns an empty list because unlike in js,
        #python.sort sorts the list in place and returns nothing, while in js, it returns
        # a refernce to the array