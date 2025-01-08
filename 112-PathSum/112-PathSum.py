# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        def dfs(root, targetSum, currSum):
            if root == None: return False

            currSum = currSum + root.val

            if root.left == None and root.right == None:
                if currSum == targetSum: return True 

            return dfs(root.left, targetSum, currSum) or dfs(root.right, targetSum, currSum)

        
        return dfs(root, targetSum, 0)

