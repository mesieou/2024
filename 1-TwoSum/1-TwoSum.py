class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        numsWithIndex = {}
        for i,num in enumerate(nums):

            if (target - num) in numsWithIndex:
                print(f"this is is the number to look{target - num}")
                print(f"this is is my hash{numsWithIndex}")
                return [i, numsWithIndex[(target - num)]]

            numsWithIndex[num] = i

            
        