
#my error, when decreasing, the range is non inclusive of the final index,
#thus when decrementing towards a range with last index 0, you have to specify -1 as the end of the range
class Solution:
    def heapPop(self, nums):
        largestNum = nums[0]
        nums[0] = nums[-1]
        nums.pop()
        self.heapifyDown(0, nums)
        return largestNum

    def heapifyDown(self, i, nums):
        largest = i
        left = 2*i+1
        right = 2*i+2
        if left < len(nums) and nums[left] > nums[largest]:
            largest = left
        if right < len(nums) and nums[right] > nums[largest]:
            largest = right
        if largest != i:
            nums[largest],nums[i] = nums[i],nums[largest]
            self.heapifyDown(largest, nums)

    def heapify(self, nums):
        lastChildIndex = len(nums)//2
        for i in range(lastChildIndex, -1, -1):
            self.heapifyDown(i, nums)

    def heapSort(self, nums):
        self.heapify(nums)
        res = []
        for i in range(len(nums)):
            next = self.heapPop(nums)
            res.insert(0,next)
        return res
        
    def sortArray(self, nums: List[int]) -> List[int]:
        return self.heapSort(nums)