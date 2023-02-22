class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)
        heapq.heapify(nums)
        ith = 1

        while len(nums) > 0:
            current = heapq.heappop(nums)
            #get rid of all the negative and zero values
            if current <= 0:
                continue

            #get rid of the duplicate numbers above zero
               #if we hit the end of nums early, we do our check
            while (len(nums) > 0 and current == nums[0]):
                current = heapq.heappop(nums)

            #smallest positive, if it equals ith, advance ith and continue loop
            if current == ith:
                ith += 1
                continue
            else:
                #when the smallest positive does not equal ith, ith is the number missing.
                return ith
            
        #if we have exhausted the heap, ith is missing
        return ith