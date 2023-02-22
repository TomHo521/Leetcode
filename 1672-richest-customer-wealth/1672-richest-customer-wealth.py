class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        richestCustomer = 0

        for i in range(len(accounts)):
            ithCustomer = 0
            for j in accounts[i]:
                ithCustomer += j
            richestCustomer = max(richestCustomer, ithCustomer)
        
        return richestCustomer

