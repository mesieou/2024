class Solution:
    def countCompleteComponents(self, n: int, edges: List[List[int]]) -> int:
        graph = convert_to_graph(edges, n)
        visited = set()
        count = 0
        
        # Traverse all nodes in the graph
        for node in range(n):
            if node not in visited:
                component_nodes = set()
                if self.dfs(graph, node, visited, component_nodes):
                    # Check if the component forms a complete graph
                    if self.is_complete_graph(graph, component_nodes):
                        count += 1
        return count

    def dfs(self, graph, node, visited, component_nodes):
        visited.add(node)
        component_nodes.add(node)
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                self.dfs(graph, neighbor, visited, component_nodes)
                
        return True
    
    def is_complete_graph(self, graph, component_nodes):
        # In a complete graph, every node has exactly len(component_nodes) - 1 neighbors
        component_size = len(component_nodes)
        for node in component_nodes:
            if len(graph[node]) != component_size - 1:
                return False
        return True

def convert_to_graph(edges, n):
    graph = {i: [] for i in range(n)}
    for a, b in edges:
        graph[a].append(b)
        graph[b].append(a)
    return graph
