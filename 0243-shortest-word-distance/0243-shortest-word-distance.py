class Solution:
    def shortestDistance(self, wordsDict: List[str], word1: str, word2: str) -> int:
        locWord1 = []
        locWord2 = []
        for i in range(len(wordsDict)):
            if wordsDict[i] == word1:
                locWord1.append(i)
            if wordsDict[i] == word2:
                locWord2.append(i)
        
        minD = math.inf
        for i in range(len(locWord1)):
            for j in range(len(locWord2)):
                minD = min(minD, abs(locWord1[i] - locWord2[j]))
        
        return minD