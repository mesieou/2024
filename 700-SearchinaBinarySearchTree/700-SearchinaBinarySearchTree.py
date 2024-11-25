from collections import deque 
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if root == None: return []
        queue = deque([root])

        while queue:
            curr = queue.popleft()

            if curr.val == val:
                return curr
            
            if val < curr.val:
                if curr.left: queue.append(curr.left)
            else:
                if curr.right: queue.append(curr.right)

        