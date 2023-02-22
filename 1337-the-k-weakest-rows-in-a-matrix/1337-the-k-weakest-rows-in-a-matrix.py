class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        res = []
        for i in range(len(mat)):
            count = 0
            for j in mat[i]:
                if j == 1:
                    count +=1
            res.append((count, i))
            
        heapq.heapify(res)
        solution = []
        for n in range(0,k):
            temp = heapq.heappop(res)
            solution.append(temp[1])
        return solution
