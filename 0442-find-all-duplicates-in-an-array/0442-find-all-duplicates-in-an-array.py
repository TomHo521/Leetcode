class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        res = []
        for x in nums:
            if nums[abs(x)-1] < 0:
                #need the abs to get the orignal value without the '- marker
                res.append(abs(x))
            else:
                nums[abs(x)-1] *= -1
            
            #print(nums)
        return res