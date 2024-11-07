class Solution:
    def countElements(self, arr: List[int]) -> int:
        set_num = set(arr)
        count = 0
        for num in arr:
            if num + 1 in set_num:
                count += 1
        return count
