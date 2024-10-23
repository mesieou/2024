/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let indegree = Array(n).fill(0);

    for(let [origin, destination] of edges){
        indegree[destination]++;
    }

    return [...Array(n).keys()].filter(i => indegree[i] === 0)
};