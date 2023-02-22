class UnionFind:
    def __init__(self, size) -> None:
        self.root = [i for i in range(size)]
        self.rank = [1] * size
    
    def find(self, x):
        if x == self.root[x]:
            return x
        #path compression here
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
            if self.rank[rootY] == self.rank[rootX]:
                self.root[rootY] = self.root[rootX]
                self.rank[rootY] +=1
    
    def connected(self, x, y):
        return self.find(x) == self.find(y)

    
class Solution:

    
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        uf = UnionFind(n)

        for edge in edges:
            # if not uf.connected(at, to):
            uf.union(edge[0], edge[1])
        
        # connectedComponents = {}
        cc = set()
        # for edge in edges:
        #     uf.connected(edge[0], edge[1])

        
        # for root in uf.root:
        #     connectedComponents[root] = True

        ##intead people use this.  What am I missing?
        for i in range(n):
            cc.add(uf.find(i))
        
        #return len(connectedComponents.keys())
        return len(cc)

