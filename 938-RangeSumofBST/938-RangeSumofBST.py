# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def rangeSumBST(self, root, low, high):
        if root == None: return 0
        acc = 0

        if low <= root.val <= high: 
            acc += root.val
        
        if root.val > low:
            acc += self.rangeSumBST(root.left, low, high)
        if root.val < high:
            acc += self.rangeSumBST(root.right, low, high)
        
        return acc
        