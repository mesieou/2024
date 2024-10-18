from collections import deque

edgeList = [
    ['A', 'B'], 
    ['A', 'D'],  
    ['B', 'C'],  
    ['C', 'D']   
]


def findMinimumPath(list, start, end):
    # Initialize a queue and inser the start node
    queue = deque([(start, 0)])
    # Initialize a visited set and add the start
    visited = set()
    visited.add(start)

    #transform the edge list into an adjacency list
    adjacencyList = transformToAdjacencyList(list)

    # create a while loop while there are items in the queue
    while queue:
        # take the last item of the queue and save it a the current node
        currNode = queue.popleft()
        # check if the current node is equal to the end node
        if currNode[0] == end:
            # if so, return the current node count
            return currNode[1]
        # else
        else: 
            # loop through the neibors of the current node
            for neibor in adjacencyList[currNode[0]]:
                # increase the count
                if neibor not in visited:
                    visited.add(neibor)
                    # append the neibor to the queue with the count
                    queue.append((neibor, currNode[1] + 1))
                    print(queue)
    # return count
    return -1

def transformToAdjacencyList(list):
    # initialize the object
    obj = {}
    # loop through the edges
    for edge in list:
        print(edge)    
        # destruct the edge
        a, b = edge

        # initialise the edge in the object if it does not exit
        if a not in obj:
            obj[a] = []
        if b not in obj:
            obj[b] = []

        # add both nodes from the destruction to the object and add the other node
        obj[a].append(b) 
        obj[b].append(a) 
    
    return obj

res = findMinimumPath(edgeList, 'A', 'D')
