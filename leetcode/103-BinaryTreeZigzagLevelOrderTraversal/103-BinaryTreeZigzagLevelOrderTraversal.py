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
        
        queue = deque([root])
        final = []
        toRight = True
        
        while queue:
            nodesOnLevel = len(queue)
            ans = []
            for node in range(nodesOnLevel):
                curr = queue.popleft()
                ans.append(curr.val)
                
                if curr.left:
                    queue.append(curr.left)  # Left child first
                if curr.right: 
                    queue.append(curr.right)  # Right child second
                    
            if not toRight:
                ans.reverse()
                    
            final.append(ans)
            toRight = not toRight

        
        return final
        
        
