class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        
        localMax = arr[len(arr) - 1]
        for i in range(len(arr) - 2, 0, -1):
            temp = arr[i]
            arr[i] = localMax
            localMax = max(localMax, temp)
        
        arr[0] = localMax
        arr[len(arr) - 1] = -1
        return arr
            
        
            