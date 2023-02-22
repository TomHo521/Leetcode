import functools
class Solution:
    def minCost(self, costs: List[List[int]]) -> int:

        @functools.lru_cache(maxsize=None)
        def paintDP(n, neighboringColor):
            
            if n == 0:
                if neighboringColor == "red":
                    return min(costs[0][1],costs[0][2]) 
                if neighboringColor == "green":
                    return min(costs[0][0],costs[0][2]) 
                if neighboringColor == "blue":
                    return min(costs[0][0],costs[0][1])
                print('error condition')
                return float('inf')

            #case where n > 0
            if neighboringColor == "red":
                greenChoice = costs[n][1] + paintDP(n - 1, "green")
                blueChoice = costs[n][2] + paintDP(n - 1, "blue")
                return min(greenChoice, blueChoice)
            
            if neighboringColor == "green":
                redChoice = costs[n][0] + paintDP(n - 1, "red")
                blueChoice = costs[n][2] + paintDP(n - 1, "blue")
                return min(redChoice, blueChoice)
            
            if neighboringColor == "blue":
                redChoice = costs[n][0] + paintDP(n - 1, "red")
                greenChoice = costs[n][1] + paintDP(n - 1, "green")
                return min(redChoice, greenChoice)
        
        n = len(costs) - 1
        firstChoiceRed = paintDP(n, "red")
        firstChoiceGreen = paintDP(n, "green")
        firstChoiceBlue = paintDP(n, "blue")

        return min(firstChoiceRed, firstChoiceGreen, firstChoiceBlue)

