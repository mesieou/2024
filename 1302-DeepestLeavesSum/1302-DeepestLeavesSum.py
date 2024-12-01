from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
       queue, sum_per_level = deque([root]), 0

       while queue:
        curr_level = len(queue)
        sum_per_level = 0
        for i in range(curr_level):
            curr = queue.popleft()
            sum_per_level += curr.val
            
            if curr.left: queue.append(curr.left)
            if curr.right: queue.append(curr.right)

       return  sum_per_level

        