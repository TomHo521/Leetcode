class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        patternList = {}
        arr = s.split(' ')
        
        test = ''
        counter = 0

        for word in arr:
            if word in patternList:
                test += patternList[word]
            else:
                newKey = chr(ord('a') + counter)
                counter +=1
                patternList[word] = newKey
                test += newKey

        patternPattern = ''
        ppList = {}
        counter2 = 0
        for c in pattern:
            if c in ppList:
                patternPattern += ppList[c]
            else:
                newKey = chr(ord('a') + counter2)
                counter2 +=1
                ppList[c] = newKey
                patternPattern += newKey
        
        if test == patternPattern:
            return True
        
        print(test)
        return False
