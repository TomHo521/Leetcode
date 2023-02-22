class Solution:
    def checkValid(self, matrix: List[List[int]]) -> bool:
        n = len(matrix)
        if n == 1:
            return True
        
        validSet = set()
        for i in range(1, n+1):
            validSet.add(i)
        
        print(validSet)
        
        for row in matrix:
            if set(row) != validSet:
                #print('failed row at: ', row)
                return False

        for i in range(n):
            colSet = set()
            for j in range(n):
                colSet.add(matrix[j][i])
            if colSet != validSet:
                #print('failed col at: ', colSet)
                return False
        
        return True
            


        


        