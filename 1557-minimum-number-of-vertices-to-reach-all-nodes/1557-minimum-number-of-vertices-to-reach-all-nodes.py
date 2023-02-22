class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        #initial thoughts, isnt this just the indegrees of zero?
        indegree = [0] * n
        for edge in edges:
            indegree[edge[1]] += 1
        res = []
        for i in range(n):
            if indegree[i] == 0:
                res.append(i)
        print(res)
        return res