class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        if len(arr) < 3:
            return False
        
        i = 1
        while i < len(arr):
            if arr[i] == arr[i-1]:
                return False
            if arr[i] < arr[i-1]:
                break
            i+=1
        
        if i > len(arr) - 1 or i == 1:
            return False
    
        while i < len(arr):
            if arr[i] >= arr[i-1]:
                return False
            i+=1
        
        return True


