class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = right = minleft = 0
        minright = len(nums)
        windowSum = 0

        while right < len(nums):

            windowSum += nums[right]
            #print(f"windowSum {windowSum} left:{left} right:{right}")

            # #valid condition
            if windowSum >= target:
                #print('valid condition found at : ', left, ' ', right)
                while (left <= right and windowSum >= target):
                    windowSum -= nums[left]
                     #once we have exited check to see if smaller
                    if right - left <= minright - minleft:
                        minright, minleft = right, left
                        #print(f"new minleft: {minleft} minright: {minright}")

                    left += 1
            right +=1

        if minright == len(nums):
            return 0

        return minright - minleft + 1




