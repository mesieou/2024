from collections import deque
from functools import reduce 

class MovingAverage:
    def __init__(self, size):
        self.queue = deque([])
        self.size = size
    
    def next(self, val):
        #add the val to the queue
        self.queue.append(val)

        #if the queue is bigger than the size remove the front
        if len(self.queue) > self.size: self.queue.popleft()

        # calculate the average and return it
        return sum(self.queue) / len(self.queue)

        


# Your MovingAverage object will be instantiated and called as such:
# obj = MovingAverage(size)
# param_1 = obj.next(val)