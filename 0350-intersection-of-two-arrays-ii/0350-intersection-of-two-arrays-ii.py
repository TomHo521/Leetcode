class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        if len(nums2) < len(nums1):
            nums1, nums2 = nums2, nums1
        
        codex = collections.Counter(nums2)
        
        intersectionArray = []
        for i in nums1:
            if i in codex:
                if codex[i] > 0:
                    codex[i] -=1
                    intersectionArray.append(i)
        return intersectionArray