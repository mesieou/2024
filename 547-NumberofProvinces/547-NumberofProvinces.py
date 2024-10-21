from collections import defaultdict
from typing import List

class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        def dfs(node):
            visited.add(node)
            for neighbour in adjacencyList[node]:
                if neighbour not in visited:
                    dfs(neighbour)

        # Create an adjacency list of the cities
        adjacencyList = defaultdict(list)
        numberOfCities = len(isConnected)
        visited = set()
        ans = 0
        
        # Fill the adjacency list based on the connections
        for i, city in enumerate(isConnected):
            for j, connection in enumerate(city):
                if i < j and connection == 1:
                    adjacencyList[i].append(j)
                    adjacencyList[j].append(i)
        
        # Perform DFS for each city
        for i in range(numberOfCities):
            if i not in visited:
                ans += 1
                dfs(i)
        
        return ans
