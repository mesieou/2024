from collections import deque
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        ans, stack = [], deque([])
        #loop through the nums
        for i, num in enumerate(nums):
          #remove the first element in the stack if it is outside of the window
          if stack and stack[0] < i - k + 1:
            stack.popleft()

          # Remove the last number of the stack if the curr is > than the last item in the stack
          while stack and num > nums[stack[-1]]:
            stack.pop()

          # push the curr number to the stack
          stack.append(i)

          # start processing the stack once the first window is completed
          if i >= k - 1:
            ans.append(nums[stack[0]])
       

        return ans

          
        