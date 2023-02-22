class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        avail = collections.Counter(jewels)
        #print(avail)
        jc = 0;
        for i in stones:
            if i in jewels:
                jc+=1
        return jc