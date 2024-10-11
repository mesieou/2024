from collections import deque
class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        popped_deck = deque(popped)
        res = []
        
        for i in pushed:
            res.append(i)

            while res and res[-1] == popped_deck[0]:
                res.pop()
                popped_deck.popleft()
        
        while res and res[-1] == popped_deck[0]:
            res.pop()
            popped_deck.popleft()

        return True if len(res) == 0 else False
        

        
