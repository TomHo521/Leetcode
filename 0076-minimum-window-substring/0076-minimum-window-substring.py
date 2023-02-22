class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(t) > len(s):
            return ""

        if len(t) == 1:
            for x in s:
                if x == t:
                    return t


        needed = collections.Counter(t)
        missing = len(t)
        left = 0
        right = 0
        minSize = 100000
        minLeft = 0
        minRight = 0
        validFound = False

        while right < len(s):
            #expand until new valid
            #needed dict is what we require.  In no instance should an unnecessary letter
            #ever be greater than one.  So if the indexed letter > 1, we have a letter in the t str.
            
            if (needed[s[right]] > 0):
                missing -=1
            needed[s[right]] -= 1
            
            #test to see if valid window found
            if missing == 0:
        
                validFound = True
                #shrink until invalid
                while left < right and needed[s[left - 1]] < 1 :
                    
                    #before we advance the left, we have to remove the letter its on
                    needed[s[left]] +=1
                    #moreover while window still valid, check for size
                    if right - left +1 <= minSize:
                        minSize = right - left
                        minLeft = left
                        minRight = right
                    

                    left +=1
                
                print('invalid at ', left, ' and ', right)
                missing +=1
            
            right +=1
            
        if not validFound:
            return ""

        return s[minLeft:minRight+1]
            
            