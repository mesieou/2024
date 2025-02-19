# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def diameterOfBinaryTree(self, root):
        self.diameter = 0
        def dfs(node):
            #base case
            if node == None: return 0

            left = dfs(node.left)
            right = dfs(node.right)

            #updating the diameter
            self.diameter = max(self.diameter, left + right)

            #returning the diameter
            return 1 + max( left, right)
        
        dfs(root)
        return self.diameter