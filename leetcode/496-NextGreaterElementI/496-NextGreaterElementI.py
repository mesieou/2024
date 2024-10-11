class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stack = []
        map = {}
        
        for num in nums2:
            while(stack and num > stack[-1]):
                map[stack.pop()] = num
            stack.append(num)
        
        while(stack):
            map[stack.pop()] = -1
        
        return [map.get(i, -1) for i in nums1]
