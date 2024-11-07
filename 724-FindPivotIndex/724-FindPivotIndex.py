class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        preffix = [0]
        
        for num in nums:
            preffix.append(preffix[-1] + num)
        
        for i, num in enumerate(nums):
            leftSum = preffix[i]
            rightSum = preffix[-1] - preffix[i + 1]
            if leftSum == rightSum: 
                return i
        
        return -1 
        




        
