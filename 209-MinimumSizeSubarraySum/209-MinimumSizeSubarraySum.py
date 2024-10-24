class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = 0
        acc = 0
        ans = float('inf')
        for right, num in enumerate(nums):
            acc += num
            while acc >= target:
                ans = min(ans, right - left + 1)
                acc -= nums[left]
                left += 1
            
        return 0 if ans == float('inf') else ans

            
        
