class StockSpanner:

    def __init__(self):
        #declare a deck
        self.stack = []
        

    def next(self, price: int) -> int:
        stack = self.stack
        span = 1
        
        # check if the deck is not empty and if the last item in the deck < current number
        while stack and stack[-1][0] <= price:
            span += stack.pop()[1]
            
        # add the index to the deck
        stack.append((price, span))
        
        return span
        


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)
