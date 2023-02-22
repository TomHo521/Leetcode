class UnionFind:
    def __init__(self, size):
        self.root = [i for i in range(size)]

    def find(self, x):
        if x == self.root[x]:
            return x
        self.root[x] = self.find(self.root[x])
        return self.root[x]
        
		
    def union(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)
        if rootX != rootY:
            self.root[rootY] = rootX

    def connected(self, x, y):
        return self.find(x) == self.find(y)

#is there a better way?
class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:

        numProvinces = UnionFind(len(isConnected))

        #unite all relevant nodes into connected components.
        for i in range(len(isConnected)):
            for j in range(len(isConnected[i])):
                if isConnected[i][j] == 1:
                    numProvinces.union(i,j)
        
        provinceCounter = {}
        print('the root vector: ', numProvinces.root)

        for i in range(len(isConnected)):
            for j in range(len(isConnected[i])):
                if isConnected[i][j] == 1:
                    numProvinces.connected(i,j)

        #utilize path compression to make sure every node is pointing to its roots.
        for root in numProvinces.root:
            numProvinces.find(root)
        
        #the number of different root values will be the number of different provinces
        #but path compression is required!
        for k in numProvinces.root:
            provinceCounter[k] = True

        
        
        return len(provinceCounter.keys())




        