from collections import deque
from functools import reduce 

class MovingAverage:

    def __init__(self, size: int):
        self.queue = deque(maxlen=size)
        self.size = size


    def next(self, val: int) -> float:
        self.queue.append(val)
        sum = reduce(lambda x, y: x + y, self.queue)
        return sum / len(self.queue)
        


# Your MovingAverage object will be instantiated and called as such:
# obj = MovingAverage(size)
# param_1 = obj.next(val)
