class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        cache = {}
        
        for i in range(len(arr)):
            if arr[i]*2 in cache:
                return 1
            if arr[i]/2 in cache:
                return 1
            cache[arr[i]] = i
        
        return 0
            
        