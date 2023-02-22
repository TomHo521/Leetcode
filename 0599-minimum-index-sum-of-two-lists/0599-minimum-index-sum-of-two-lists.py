class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        
        listCodex = {}
        minIndexSum = 2000
        res = []

        for i in range(len(list1)):
            listCodex[list1[i]] = i
        
        for j in range(len(list2)):
            if list2[j] in listCodex:
                #word is found in both lists
                minIndexSum = min(minIndexSum, j + listCodex[list2[j]])
        
        for j in range(len(list2)):
            if list2[j] in listCodex:
                if j + listCodex[list2[j]] == minIndexSum:
                    res.append(list2[j])
                

        return res