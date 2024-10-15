const edges = [
    ['A', 'B'],
    ['B', 'D'],
    ['B', 'E'],
    ['A', 'F'],
    ['D', 'E'],
    ['E', 'F']
  ];

  const hasAPath = (edges, origin, destination) => {
    //create a graph first using a object
    let graph = converToGraph(edges);

    return dfs(graph, origin, destination,  set = new Set());
    
  }

  const dfs = (graph, origin, destination, visited) => {
    // check if the origin is equal to destination, if so it means there is a path
    if(origin == destination) return true;

    // check if the origin was visited already, if so it means we need to stop traversing through that subpath and return false
    if(visited.has(origin)) return false;

    // add the origin to the visited
    visited.add(origin);
    
    // loop through the nodes of the graph
    for(let neighbor of graph[origin]){
        // create the recurssion call to traverse to all nodes, if the destion in reached return true
       if(dfs(graph, neighbor, destination, visited) == true) return true;
    }
    
    // if traversal was completed return false meaning there is no path
    return false;
  }

  const converToGraph = (edges) => {
    // create the object
    obj = {};

    // loop through all the edges
    for(let edge of edges){
        // save the two nodes in the adge in variables
        const [a, b] = edge;

        // if the edge is not in the object, create a new key pair
        if (!obj[a]) obj[a] = [];
        if (!obj[b]) obj[b] = [];

        // add the edge in both keys
        obj[a].push(b);
        obj[b].push(a);
    }
    
    // return the object
    return obj;
  }

console.log(converToGraph(edges))
console.log(hasAPath(edges, 'A', 'C'));
console.log(hasAPath(edges, 'A', 'D'));