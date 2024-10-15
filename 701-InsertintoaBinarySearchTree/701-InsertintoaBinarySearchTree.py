# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        #check if there is no root
        if not root:
            root = TreeNode(val)
            return root
        else:
            #check if the root is less than the new value
            if val < root.val:
                # check if the left root is empty
                if not root.left:
                    root.left = TreeNode(val)
                # else make the recursive call again
                else:
                    self.insertIntoBST(root.left, val)
            #check if the root is more than the new value
            elif val > root.val:
                # check if the right root is empty
                if not root.right:
                    root.right = TreeNode(val)
                else:
                    # else make the recursive call again
                    self.insertIntoBST(root.right, val)
            else:
                return None
        
        return root
        
