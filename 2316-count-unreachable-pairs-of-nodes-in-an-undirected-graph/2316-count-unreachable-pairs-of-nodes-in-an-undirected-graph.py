import math
class UnionFind:
    def __init__(self, size):
        self.root = [i for i in range(size)]
        self.rank = [1] * size

    def find(self, x):
        if x == self.root[x]:
            return x
        self.root[x] = self.find(self.root[x])
        return self.root[x]

    def union(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)
        if rootX != rootY:
            if self.rank[rootX] < self.rank[rootY]:
                self.root[rootX] = self.root[rootY]
            if self.rank[rootY] < self.rank[rootX]:
                self.root[rootY] = self.root[rootX]
            if self.rank[rootX] == self.rank[rootY]:
                self.root[rootX] = self.root[rootY]
                self.rank[rootX] +=1
        
    def connected(self, x, y):
        return self.find(x) == self.find(y)

class Solution:
    def countPairs(self, n: int, edges: List[List[int]]) -> int:
        uf = UnionFind(n)
        for edge in edges:
            uf.union(edge[0], edge[1])
        for i in range(n):
            uf.find(i)

        connectedComponents = {}
        for i in uf.root:
            if i in connectedComponents:
                connectedComponents[i] += 1
            else:
                connectedComponents[i] = 1

        res = []
        for value in connectedComponents.values():
            res.append(value)
        
        if len(res) == 1:
            return 0
        numPairs = 0
        for x in res:
            numPairs += x * (n-x)
        
        numPairs //= 2
        return numPairs

        
    

        
        
       
        


