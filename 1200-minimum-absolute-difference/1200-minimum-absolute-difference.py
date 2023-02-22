class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
        
        arr.sort()
        minDist = 1000000
        for i in range(1, len(arr)):
            minDist = min(minDist, arr[i] - arr[i-1])
        
        diff = []
        for i in range(1, len(arr)):
            if (arr[i] - arr[i-1] == minDist):
                diff.append([arr[i-1], arr[i]])
                
        return diff
            
        