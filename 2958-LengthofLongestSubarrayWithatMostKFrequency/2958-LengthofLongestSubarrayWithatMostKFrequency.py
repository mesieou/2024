class Solution:
    def maxSubarrayLength(self, nums: List[int], k: int) -> int:
        #create a dic with the frequencies
        dic = {}
        #initialise left, ans
        left, ans = 0, 0

        #loop through the nums
        for right, num in enumerate(nums):
            # add the pair to the dic
            dic[num] = dic.get(num, 0) + 1
            # check if the num frequency is greater than k
            while dic[num] > k:
                #decrease the frequency of the left number on the dic
                dic[nums[left]] -= 1
                if dic[nums[left]] == 0:
                    del dic[nums[left]]
                
                left += 1
            
            # calculate and update the length of the array
            ans = max(ans, right - left + 1)
        
        return ans
