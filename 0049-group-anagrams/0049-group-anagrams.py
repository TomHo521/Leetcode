class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        res = []
        index = {}

        for i in strs:
            wordCopy = i
            key = ''.join(sorted(i))
            if key in index:
                index[key].append(wordCopy)
            else:
                index[key]= [wordCopy]
            
        
        for j in index:
            res.append(index[j])
        
        return res


        

