# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def dfs(root, acc):
            if root == None: return 0

            acc = max(acc, root.val)

            if acc <= root.val:
                return 1 + dfs(root.left, acc) + dfs(root.right, acc)
            else:
                return dfs(root.left, acc) + dfs(root.right, acc)




        return dfs(root, float('-inf'))


        