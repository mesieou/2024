# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:
        #case 1: none nodes
        if root == None: return 0
        
        
        def helper(node, minCurr, maxCurr):
            #case2: if leaf node
            if node == None:
                return maxCurr - minCurr
            
            #update min and maxs
            minCurr = min(minCurr, node.val)
            maxCurr = max(maxCurr, node.val)
            
            left = helper(node.left, minCurr, maxCurr)
            right = helper(node.right, minCurr, maxCurr)
            
            return max(left, right)
        
        return helper(root, root.val, root.val)
        
