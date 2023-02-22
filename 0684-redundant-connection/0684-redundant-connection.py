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
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        #note they did not give n.  You normally don't know how many nodes there are given
        #an edge list without making an adjacency list.
        #in this case, however it is ok to initalize the unionFind with len(edges) because
        #the problem expressly states we have one extra edge beyond a tree.  
        #there are n-1 edges in a tree, thus len(edges) of nodes in this case.
        uf = UnionFind(len(edges))

        #for each edge, join the edges together.  If you find a previously connected edge,
        #this is the extraneous edge.  This would also create the cycle.  We can return here.
        for edge in edges:
            if uf.connected(edge[0] -1, edge[1] - 1):
                return edge
            else:
                uf.union(edge[0] - 1, edge[1] - 1)



