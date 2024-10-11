from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        #initialise the deck and sum
        queue = deque([root])
        sum = 0
        
        #loop infinitely until there is no more nodes in the deck
        while queue:
            nodes_in_current_level = len(queue)
            sum = 0

            for _ in range(nodes_in_current_level):
                # remove the first item of the deck and save it in a variable
                currNode = queue.popleft()
                # add the children to the deck
                sum += currNode.val
                if currNode.left:
                    queue.append(currNode.left)
                if currNode.right:
                    queue.append(currNode.right)
              
        return sum
        
