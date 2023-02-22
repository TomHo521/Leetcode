
from functools import lru_cache

class Solution:

        

    def minimumTotal(self, triangle: List[List[int]]) -> int:

        @lru_cache(maxsize = 128)
        def dpTriangleMin(level, i) -> int:
            
            if level >= len(triangle):
                return 0
            
            # if not triangle[level][i]:
            #     print('exceeded bounds', level, ' at ', i)
            #     return 0
            
            minPath = triangle[level][i]
            leftPath = dpTriangleMin(level + 1, i)
            rightPath = dpTriangleMin(level + 1, i+1)
            minPath = minPath + min(leftPath, rightPath)

            return minPath

        return dpTriangleMin(0, 0)


        
        


