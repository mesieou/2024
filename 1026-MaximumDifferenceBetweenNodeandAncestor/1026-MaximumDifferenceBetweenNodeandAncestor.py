# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:
        def dfs(node, curr_min, curr_max):
            #no nodes the answer is zero
            if not node: return curr_max - curr_min

            curr_min = min(curr_min, node.val)
            curr_max = max(curr_max, node.val)
            
            left = dfs(node.left, curr_min, curr_max)
            right = dfs(node.right, curr_min, curr_max)
            return max(left, right)
        
        return dfs(root, root.val, float('-inf'))

        