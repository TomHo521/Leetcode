import functools
class Solution:
    def minCostII(self, costs: List[List[int]]) -> int:

       

        @functools.lru_cache(maxsize=None)
        def paintDP(n, k):
            #edge case, where there is 1 house, the n call will be 0 - 1 or negative. 
            if n < 0:  
                return 0

            if n == 0:  
                mCost = 100000 
                for i in range(len(costs[0])):
                    if i != k:
                        mCost = min(mCost,costs[0][i]) 
                return mCost

            mCost = 100000
            #case where n > 0
            for i in range(len(costs[0])):
                if i != k:
                    kthChoice = costs[n][i] + paintDP(n-1, i)
                    mCost = min(mCost, kthChoice)

            return mCost

        n = len(costs) - 1
        ans = 1000000
  
        for i in range(len(costs[0])):  
            kthChoice = costs[n][i] + paintDP(n-1, i)      
            ans = min(ans, kthChoice)
   
        return ans