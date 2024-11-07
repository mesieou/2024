class Solution:
    def isPathCrossing(self, path: str) -> bool:
        coordinates = set([(0,0)])
        x, y = 0, 0
        
        for direction in path:
            if direction == 'E': x += 1
            if direction == 'W': x -= 1
            if direction == 'N': y += 1
            if direction == 'S': y -= 1
            curr = (y,x)
            if curr in coordinates:
                return True
            else:
                coordinates.add(curr)
            
        return False
    

        
