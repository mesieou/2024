from collections import deque 
class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        r = deque([])
        d = deque([])


        #1- loop through the senate
        for i, s in enumerate(senate):    
            #2- separate the parties in two queues with their indexes
            r.append(i) if s == "R" else d.append(i)
    
        
        while r and d:
            #4- recalculate the index
            new_senate_r = r.popleft()
            new_senate_d = d.popleft()
                
            #5- compare the parties.
            #6- reappend the index of the party whith smaller index.
            if new_senate_r < new_senate_d:
                r.append(new_senate_r + len(senate))
            else:
                d.append(new_senate_d + len(senate))
                            
        
        #6- return the party with elements
        return 'Radiant' if r else 'Dire'


        
