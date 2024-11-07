class Solution:
    def largestUniqueNumber(self, nums: List[int]) -> int:
        nums_with_frequencies = {}
        ans = float('-inf')
        for num in nums:
            nums_with_frequencies[num] = nums_with_frequencies.get(num, 0) + 1
        
        for key, val in nums_with_frequencies.items():
            if val < 2:
                ans = max(ans, key)
        
        return -1 if len(nums) == 0 or ans == float('-inf') else ans


        
