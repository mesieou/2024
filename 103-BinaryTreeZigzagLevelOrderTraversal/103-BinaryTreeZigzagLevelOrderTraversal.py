from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root: return []
        queue, zigZagArr, rightDirection = deque([root]), [], True

        while queue:
            curr_level_numbers = []
            for i in range(len(queue)):
                currNode = queue.popleft()
                curr_level_numbers.append(currNode.val)
                if currNode.right: queue.append(currNode.right)
                if currNode.left: queue.append(currNode.left)
            if rightDirection:
                curr_level_numbers.reverse()
        
            zigZagArr.append(curr_level_numbers)
            rightDirection = not rightDirection

        return zigZagArr    
        