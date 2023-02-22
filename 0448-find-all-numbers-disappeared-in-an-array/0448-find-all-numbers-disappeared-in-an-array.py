class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        numSet = set()
        for i in nums:
            numSet.add(i)
        
        res = []
        for j in range(1,len(nums)+1):
            if j not in numSet:
                res.append(j)
        return res


        