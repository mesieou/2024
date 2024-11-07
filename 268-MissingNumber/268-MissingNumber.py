class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        set_nums = set(nums)
        for num in range(len(nums) + 1):
            if not num in set_nums:
                return num
            
        
