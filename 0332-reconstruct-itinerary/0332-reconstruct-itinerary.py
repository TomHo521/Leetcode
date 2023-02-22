class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:

        #Initial notes.  I think this is DFS backtracking, where we need len(tickets) number of hops.
        #part 1 of the problem, going to try to find all possible itineraries

        #step 1, build the adjacency list.
        adjList = {}
        ticketsLeft = {}
        for i in range(len(tickets)):
            start = tickets[i][0]
            if start in adjList:
                adjList[start].append([tickets[i][1], i])
            else:
                adjList[start] = [[tickets[i][1], i]]
            ticketsLeft[i] = True
        
        for lists in adjList.values():
            lists.sort()
        # print('adjList ', adjList)
        # print('ticketsLeft', ticketsLeft)
        res = collections.deque([])

        def dfs(start, path, ticketsLeft):
            if len(path) == len(tickets) + 1 and len(ticketsLeft) == 0:
                res.append(path[:])
                return

            #for every outgoing path
            for to, ticketnum in adjList[start]:
                if to in adjList:
                    if start != to and ticketnum in ticketsLeft:
                        newTicketsLeft = ticketsLeft.copy()
                        del newTicketsLeft[ticketnum]
                        #print(f'heading to {to} with wallet: {newTicketsLeft}')
                        path.append(to)
                        if len(res) == 0:
                            dfs(to, path, newTicketsLeft)
                        path.pop()
                else:
                    if len(ticketsLeft) == 1:
                        newTicketsLeft = ticketsLeft.copy()
                        del newTicketsLeft[ticketnum]
                        #print(f'last dest! heading to {to} with wallet: {newTicketsLeft}')
                        path.append(to)
                        if len(res) == 0:
                            dfs(to, path, newTicketsLeft)
                        path.pop()


        dfs("JFK", ["JFK"], ticketsLeft)
        # print('itin list ', res)

        if len(res) > 0:
            return res[0]
        
        return ["JFK ERROR NO RESULTS"]
