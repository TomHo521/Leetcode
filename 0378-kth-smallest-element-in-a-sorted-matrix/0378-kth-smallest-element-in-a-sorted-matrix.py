class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:

        heapK = []
        for i in matrix:
            for j in i:
                if len(heapK) < k:
                    heapq.heappush(heapK, j * -1)
                else:
                    heapq.heappushpop(heapK, j * -1)
        
        return heapK[0] *-1
        
        #My logic:
        #this problem uses the same logic as the top K elements.  
        #one need not poll a priority queue K times.
        #instead maintain a priority queue of only K elements.
        #suppose the original heap has N items
        #In a minHeap of length K, the first element is the kth largest
        #example.  1 2 3 4 5 6 7 8 9 10  
        #maintaing a minHeap of k = 6
        #results in [5 6 7 8 9 10] because the smallest N-K items were popped, [1,2,3,4]
        #the first Item is therefore the Kth largest, or the 10 - 6 = 4th smallest +1
        #+1 5th smallest, because the 4th smallest was popped.
        
        #now reverse that with a maxHeap. (multiply all priorities by -1 and again when popping.)
        #the oth element is now the Kth smallest.
            
        
        


