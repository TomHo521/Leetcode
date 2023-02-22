class Solution:
    def reverseWords(self, s: str) -> str:
        temp = s.split(' ')
        for i in range(len(temp)):
            temp[i] = temp[i].strip(' \t\n\r')
        new = []
        for i in temp:
            if i != '':
                new.append(i)            
        new.reverse()
        temp = ' '.join(new)
        temp = temp.strip(' \t\n\r')
        return temp