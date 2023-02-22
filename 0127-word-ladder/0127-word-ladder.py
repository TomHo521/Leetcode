class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:

        if endWord not in wordList:
            return 0
        
        table = collections.defaultdict(list)
        for word in wordList:
            if word != beginWord:
                for c in range(len(word)):
                    newKey = word[:c] + "*" + word[c+1:]
                    table[newKey].append(word)
        
        #print(table)    
        pathSet = set(beginWord)
        q = collections.deque([(beginWord, pathSet)])
        hops = 1

        while q:
            nextLevel = []
            while len(q) > 0:
                nextWord, pathSet = q.popleft()
                if nextWord == endWord:
                    #print(f'found {nextWord} endWord: {endWord}')
                    return hops
                
                #for every word we arrive at, we tokenize and enqueue only those in the WordList
                for c in range(len(nextWord)):
                    newKey = nextWord[:c] + "*" + nextWord[c+1:]
                    if newKey in table:
                        for nextEnqueue in table[newKey]:
                            if nextEnqueue not in pathSet:
                                # copyOfPathSet = pathSet.copy()
                                # copyOfPathSet.add(nextEnqueue)
                                pathSet.add(nextEnqueue)
                                nextLevel.append([nextEnqueue, pathSet])
            q += nextLevel
            hops +=1
        
        #print('error condition queue ended without finding anything')
        return 0

            

