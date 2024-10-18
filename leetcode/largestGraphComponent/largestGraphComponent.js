// Goal: return the largest component in a graph given an adjacency list

first_grapth = {
    'A': ['B', 'C'],
    'B': ['A', 'C'],
    'C': ['A', 'B'],
    'D': ['E'],
    'E': ['D', 'F'],
    'F': ['E', 'G'],
    'G': ['F']
}

// create bfs algorithm
function dfs(graph, node, visited, currSizeComponent){
    // if there is no nodes return false
    if (visited.has(node)) {
        return false;
    }

    // check the current node as visited
    // increment the current size component
    visited.add(node);
    currSizeComponent.count++;

    // loop through the neibors
    graph[node].forEach(neighbor => {
        // call the dfs method again to keep traversing
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited, currSizeComponent);
        }
    });
    
    // return true
    return true;
}

const largestComponent = (graph) => {
    // Initialize the max size component variable, visited set
    let maxSizeComponenet = 0;
    let visited = new Set();

    // loop through the graph
    for(let node in graph) {
        // Initialize the current component size variable to 0
        let currSizeComponent = {count: 0};

        // check if the node has been visited
        if (!visited.has(node)) {
            // If it has not been visited traverse thrugh the current element using bfs and return false once completed
            // if it was visited
            dfs(graph, node, visited, currSizeComponent)

            // update the max size component variable with the current size component 
            maxSizeComponenet = Math.max(maxSizeComponenet, currSizeComponent.count);
        }
    }

    return maxSizeComponenet;
}

console.log(largestComponent(first_grapth)); 


