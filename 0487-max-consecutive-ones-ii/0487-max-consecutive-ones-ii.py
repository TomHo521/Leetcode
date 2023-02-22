class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        if len(nums) < 2: 
            return len(nums)
        
        if len(nums) == 2:
            if nums[0] == 0 and nums[1] == 0:
                return 1

        left = 0
        right = 0
        zeroesFlipped = 0
        maxLen = 0
        if nums[left] == 0:
            zeroesFlipped = 1
            
        while (right < len(nums)):
            #advance right
            
            right += 1
            if (right >= len(nums)):
                break

            if (nums[right] == 0):
                zeroesFlipped +=1
            
            while (left < right and zeroesFlipped > 1):
                if nums[left] == 0:
                    zeroesFlipped -= 1 
                left +=1
                    
                    #advance until the zero is found
                #now that we are at the zero, increase one past it.
                #left +=1
                
 
            if right - left + 1 > maxLen:
                maxLen = right - left + 1

        return maxLen

        

        
