from collections import deque

class Solution:
    def isOk(self, y, x, grid):
        m = len(grid)
        n = len(grid[0])
        return y >= 0 and x >= 0 and y < m and x < n


## sigh.  this was a hard won battle.

    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:

        visited = [row[:] for row in grid]
        n = len(grid)
        if n == 1:
            if grid[0][0] == 1:
                return -1
            return 1

        if grid[0][0] == 1:
            return -1

        
        q = deque([ [0,0, 1 ]])
        visited[0][0] = 1

        distance = 100000
        
        while len(q) > 0:
    

            for node in range(len(q)):
                #print('state of q: ', q)
                next = q.popleft()
                y,x, pathDist = next[0], next[1], next[2]
                
                #print(path)
              

                # if pathDist >= distance:
                #     continue
                    
                #visited[y][x] = 1
                

                if y == n - 1 and x == n - 1:
                    #print('arrived at destination')
                    distance = min(distance, pathDist)

                #get all children
                yOffset = [-1, -1, -1, 0, 0, 1, 1, 1]
                xOffset = [-1, 0, 1, -1, 1, -1, 0, 1]
                
                for count in range(len(yOffset)):
                    
                    childx = x + xOffset[count]
                    childy = y + yOffset[count]
                    if self.isOk(childy, childx, grid):
                        if not visited[childy][childx]:
                            #print(f'unvisited node found at: {childy}, {childx}')
                            if pathDist + 1 < distance:
                                visited[childy][childx] = 1
                                
                                q.append([childy, childx, pathDist+1])
                
                
                



        #print(visited)

        if distance == 100000:
            return -1
        
        return distance

    

