/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    //create a hash map with node a key and connection nodes as values
    let graph = createGraph(n, edges);
    let count = 0;
    let visited = new Set();
    

    // loop through the map
    Object.keys(graph).forEach((node, values) => {
        let componentNodes = new Set();
        const numNode = Number(node);
        // check if the key has not been visited
        if(!visited.has(numNode)){
            dfs(graph, numNode, visited, componentNodes);

            if(isACompleteComponet(graph, componentNodes) == true){
                count++;
            }
        }
    })
        // check if the node is in a complete component increase the count
          //dfs to explore all the nodes in the component 
    
    function dfs(graph, node, visited, componentNodes){
        if(visited.has(node)) return false
        
        visited.add(node);
        componentNodes.add(node);

        for(let neighbor of graph[node]){
            dfs(graph, neighbor, visited, componentNodes);
        }
        return true
    }

    function isACompleteComponet(graph, componentNodes){
        for(let node of componentNodes){
            if(graph[node].length != componentNodes.size - 1) return false;
        }
        return true;
    }

    function createGraph(n, edges) {
        let obj = {};
        //initialize the graph with the keys
        for(let i = 0; i < n; i++){
            obj[i] = [];
        }
        // iterate through each pair and add the connections to the graph
        for(let [a,b] of edges){
            obj[a].push(b);
            obj[b].push(a);
        }
        return obj
    }

    return count;
};
