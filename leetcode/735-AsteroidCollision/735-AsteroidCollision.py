class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        res = []

        for asteroid in asteroids:
            #checking if the last asterior in res has different sign with the current asteroid
            if res and (res[-1] * asteroid) < 0:
                last_res_absolute = abs(res[-1])
                curr_absolute = abs(asteroid)
                
                #keep deleting the asteroids in res while the current in bigger
                while res and last_res_absolute < curr_absolute and res[-1] > 0:
                    res.pop()
                    last_res_absolute = abs(res[-1]) if res else []
               
                # if the current asteroid is equal to the last one, delete the oldest without adding the new one
                if last_res_absolute == curr_absolute and res[-1] > 0:
                    res.pop()
                elif res and res[-1] > curr_absolute:
                    pass
                else:
                    res.append(asteroid)
            
            # if the last character in res is the same as the current asteroid
            else:
                res.append(asteroid)
        
        return res

        
