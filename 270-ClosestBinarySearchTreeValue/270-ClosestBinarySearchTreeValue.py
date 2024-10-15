# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def closestValue(self, root: Optional[TreeNode], target: float) -> int:
        ans = root.val
        
        def dfs(node):
            nonlocal ans
            #case when there are no nodes
            if not node:
                return
            
            if abs(node.val - target) < abs(ans - target):
                ans = node.val
            elif abs(node.val - target) == abs(ans - target): 
                ans = min(ans, node.val)

            if target < node.val:
                dfs(node.left)
            else:
                dfs(node.right)
        
        dfs(root)
        
        return ans
