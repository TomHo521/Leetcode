class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if len(nums) == 0:
            return [-1,-1]
        if len(nums) == 1:
            if nums[0] == target:
                return [0,0]
            else:
                return [-1,-1]
            
        left, right = 0, len(nums) - 1
        finalleft = -1
        finalright = -1

        while left < right:
            #print(f"{left} {right}")
            mid = left + (right - left)// 2
            #print('now scanning mid: ', mid)
            if target == nums[mid] and (mid == 0 or target != nums[mid -1]):
                finalleft = mid
                print('left search found: ', finalleft)
                break
            if target > nums[mid]:
                left = mid + 1
                continue
            if target < nums[mid]:
                right = mid - 1
                continue
            if target == nums[mid]:
                right = mid - 1
        
        if not left < right and target == nums[left]:
            finalleft = left
        
        left, right = 0, len(nums) - 1
        while left < right:
            #print(f"{left} {right}")
            mid = left + (right - left)// 2
            #print('now scanning mid: ', mid)
            if target == nums[mid] and (mid == len(nums) - 1 or target != nums[mid + 1]):
                finalright = mid
                break
            if target > nums[mid]:
                left = mid + 1
                continue
            if target < nums[mid]:
                right = mid - 1
                continue
            if target == nums[mid]:
                left = mid + 1
        
        if not left < right and target == nums[right]:
            finalright = right
        
        if finalleft != -1:
            return [finalleft, finalright]

        return [-1,-1]

