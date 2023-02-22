class TwoSum:

    def __init__(self):
        self.storage = []
        
    def add(self, number: int) -> None:
        self.storage.append(number)
        
    def find(self, value: int) -> bool:
        seen = {}
        for num in self.storage:
           if value - num in seen:
             return True
           else:
             seen[num] = True

        return False



        


# Your TwoSum object will be instantiated and called as such:
# obj = TwoSum()
# obj.add(number)
# param_2 = obj.find(value)