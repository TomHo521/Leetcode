class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        evenCount = 0
        for i in nums:
            numDigits = 0
            while i > 0:
                i //= 10
                numDigits +=1
            if numDigits % 2 == 0:
                evenCount +=1
        
        return evenCount
        