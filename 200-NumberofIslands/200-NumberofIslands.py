class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        #initialise the count, visited
        count, visited = 0, set()

        #nested loop through the grid
        for i, row in enumerate(grid):
            for j, col in enumerate(row):
                curr_position = (i, j)
                #if the current position is land and it has not been visited
                if col == '1' and curr_position not in visited:
                    #dfs to traverse through the island and if true increment count
                    print(curr_position)
                    if self.dfs(grid, curr_position, visited) == True:
                        count += 1
        return count    

    def dfs(self, grid: List[List[str]], curr_position: tuple, visited: set):
            r, c = curr_position
            # if the land is not land or it has been visited return false
            if (r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0])) or grid[r][c] == '0' or curr_position in visited:
                return False

            # creating and adding the neighbours
            neighbours = [(r + 1, c), (r - 1, c), (r , c + 1), (r , c - 1)]

            # adding the current position to the visited set
            visited.add(curr_position)
    
            # loop through the neibors in the island
            for neighbour in neighbours:
                #call dfs again with the new neibor
                self.dfs(grid, neighbour, visited)
            
            # return true 
            return True

    
