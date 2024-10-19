/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    //initialize the visited set, maxSize
    let visited = new Set(), maxSize = 0;
    // loop throught the grid
    grid.forEach((rVal, r) => {
        rVal.forEach((cVal, c) => {
            // if the position is land and not visited
            if(cVal == 1 && !visited.has((r + ',' + c))){
                // dfs to traverse through the island. This returns a number which will be compare with the previous island
                maxSize = Math.max(maxSize, dfs(grid, r, c, visited));
            }
        })
    })
    //return the maxSize
    return maxSize;
};

//dfs
const dfs = (grid, r, c, visited) => {
    let pos = r + ',' + c, total = 1
    // if the island out of bounds return 0
    if((r < 0 || r >= grid.length || c < 0 || c >= grid[0].length)) return 0;
    // check the current position as visited or water
    if( grid[r][c] == 0 || visited.has(pos)) return 0;
    // add the position to te visited
    visited.add(pos);
    
    // dfs through the 4 directional neighbours
    total += dfs(grid, r + 1, c, visited);
    total += dfs(grid, r - 1, c, visited);
    total += dfs(grid, r, c - 1, visited);
    total += dfs(grid, r, c + 1, visited);
    
    // return the sum of the 4 derictional traversals
    return total
}
