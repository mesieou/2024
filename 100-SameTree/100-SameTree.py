# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        #base case if both trees are empty
        if p == None and q == None: return True
        if p == None or q == None: return False
        p_stack, q_stack = [p], [q]

        while p_stack and q_stack:
            p_curr = p_stack.pop()        
            q_curr = q_stack.pop()

            #case if their values is different
            if p_curr.val != q_curr.val: return False

            if (p_curr.right == None and q_curr.right != None) or (p_curr.right != None and q_curr.right == None):
                return False

            if p_curr.right and q_curr.right:
                p_stack.append(p_curr.right)
                q_stack.append(q_curr.right)

            if (p_curr.left == None and q_curr.left != None) or (p_curr.left != None and q_curr.left == None):
                return False

            if p_curr.left and q_curr.left:
                p_stack.append(p_curr.left)
                q_stack.append(q_curr.left)

                
        return len(p_stack) == len(q_stack)


            
        