class UnionFind:
    def __init__(self, size):
        self.root = [i for i in range(size)]
        self.rank = [1] * size

    def find(self, x):
        if x == self.root[x]:
            return x
        self.root[x] = self.find(self.root[x])
        return self.root[x]

    def union(self, x,y):
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

#dang there were lots of little parts to remember
#my strat is simple.  
# 1. UnionFind's union each point with each other 
# 2. If the points of the edge are already connected, return false, this is a cycle
# 3. If the number of edges exceeds n-1 (for n points), this is not a tree by definition
# 4. Count the number of connected components. 
   # 4a.  loop from i to n, doing a find operation to ensure path compression.
   #  ex.  before path compression [2,2,3,3,4]  after [4,4,4,4,4]
   # 4b.  use a set to count the diffenent keys.
   # 4c.  the num of different keys is the # of cc

class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        uf = UnionFind(n)

        edgeCount = 0
        for edge in edges:
            #for each edge, we union, unless they are already connected at which point you have a cycle
            if edgeCount > n -1:
                return False

            if not uf.connected(edge[0], edge[1]):
                uf.union(edge[0], edge[1])
                edgeCount += 1
            else:
                return False

        #print('state of the root: ', uf.root)

        for i in range(n):
            uf.find(i)

        #print('state of the root: ', uf.root)

        cc = set()
        for i in uf.root:
            cc.add(i)

        if len(cc) > 1:
            return False

        return True

