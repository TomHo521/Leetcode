class Solution:
    def furthestBuilding(self, heights: List[int], bricks: int, ladders: int) -> int:
        minHeap = []
        prefixSum = 0
        i = 1
        ladderableBrickOffset = 0
        while (i < len(heights)):
            if (heights[i] - heights[i-1] <= 0):
                i +=1
                continue
                
            #cost = max(0, heights[i] - heights[i-1])
            #prefixSum += cost
            cost = heights[i] - heights[i-1]
            prefixSum += cost

            #heapq.heappush(minHeap, cost)

            if len(minHeap) < ladders:
                #print('this is lenMinHeap, ', len(minHeap))
                heapq.heappush(minHeap, cost)
                ladderableBrickOffset += cost
            else:
                #print('heap before push: ', minHeap)
                popped = heapq.heappushpop(minHeap, cost)
                # print('this is lenMinHeap after push, ', len(minHeap))
                # heapq.heappop(minHeap)
                ladderableBrickOffset += (cost - popped)
                # print('this is lenMinHeap after pop, ', len(minHeap))
            
            #cost of the k Largest, where k is the cost of the ladders
            # ladderableBrickOffset = sum(minHeap, 0) *-1

            #largestN = heapq.nlargest(ladders, minHeap)
            #print('largestN: ', largestN)
            #print('heap: ', minHeap)
            
            #ladderableBrickOffset = sum(minHeap) 
            #print('ladderableBrickOffset ', ladderableBrickOffset)
            
            brickCost = prefixSum - ladderableBrickOffset
            #print('brickCost as of: i=', i, ' ', brickCost)
            if bricks - brickCost < 0:
                break
            
            i +=1
        
        return i - 1
