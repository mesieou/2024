/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let undirectedGraph = {};
    let visited = new Set()
    let original = new Set()
    // create an adjacency lit/undirected graph
    for(let connection of connections){
        let [a, b] = connection;
        if(!undirectedGraph[a]) undirectedGraph[a] = [];
        if(!undirectedGraph[b]) undirectedGraph[b] = [];

        undirectedGraph[a].push(b);
        undirectedGraph[b].push(a);
        original.add(`${a}, ${b}`)
    }

    const dfs = (node) => {
        let ans = 0;
        visited.add(node);
        
        for(let neighbour of undirectedGraph[node]){
            if(!visited.has(neighbour)){
                if(original.has(`${node}, ${neighbour}`)){
                    ans++;
                }
                ans += dfs(neighbour);
            }
        }
         return ans 
    }

    return dfs(0)
};