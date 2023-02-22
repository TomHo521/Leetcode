class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:

        res = []
        path = [0]
        visited = len(graph) * [False]

        def DFS(start, end, visited, path, res):

            if start == end:
                res.append(path[:])
                return True
            
            for node in graph[start]:
                path.append(node)
                DFS(node, end, visited, path, res)
                path.pop()
            
            return False

        DFS(0, len(graph) - 1, visited, path, res)
        print('res: ', res)
        return res


            
