class Logger:

    def __init__(self):
        self.cache = {}
        

    def shouldPrintMessage(self, timestamp: int, message: str) -> bool:
        if message in self.cache:
            if timestamp >= self.cache[message] + 10:
                self.cache[message] = timestamp
                return 1
            return 0
        self.cache[message] = timestamp
        return 1
        
        


# Your Logger object will be instantiated and called as such:
# obj = Logger()
# param_1 = obj.shouldPrintMessage(timestamp,message)