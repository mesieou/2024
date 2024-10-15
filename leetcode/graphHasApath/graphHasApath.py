# create a graph
first_grapth = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': ['E'],
    'E': ['F'],
    'F': []  # No outgoing edges from F
}



#dfs recursive
def has_path(graph, origin, destination):
    if origin == destination:
        return True
    
    for neighbor in first_grapth[origin]:
        if has_path(graph, neighbor, destination) == True:
            return True
    
    return False
print(has_path(first_grapth, 'C', 'A'))