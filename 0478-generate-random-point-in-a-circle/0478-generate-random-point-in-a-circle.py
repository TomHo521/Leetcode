class Solution:

    def __init__(self, radius: float, x_center: float, y_center: float):
        self.radius = radius
        self.x_center = x_center
        self.y_center = y_center
        
    import math
    import random
    def randPoint(self) -> List[float]:

        randomAngle = random.random() * 2 * math.pi
        randomRadius = math.sqrt(random.random()) * self.radius
        randomX = math.cos(randomAngle) * randomRadius
        randomX = self.x_center + randomX
        randomY = math.sin(randomAngle) * randomRadius
        randomY = self.y_center + randomY

        return [randomX, randomY]
        


# Your Solution object will be instantiated and called as such:
# obj = Solution(radius, x_center, y_center)
# param_1 = obj.randPoint()