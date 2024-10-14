class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

one = Node(1)
two = Node(2)
three = Node(3)
four = Node(4)
five = Node(5)

bst = three

three.left = two
three.right = five
two.left = one
five.left = four

ten = Node(10)
eleven = Node(11)
twelve = Node(12)
therteen = Node(13)
fifteen = Node(15)

ten.left = eleven
ten.right = twelve
eleven.left = therteen
twelve.right = fifteen

no_bst = ten

def validateBinarySearchTree(root):
    # create a function to track small and large numbers
    def dfs(root, small, large):
        # case when there is no root
        if not root:
            return True

        # case when the root is out of bound indicating it is not a bst
        if not small < root.val < large:
            return False

        # case when there are children checking every child meets the bst criteria
        left = dfs(root.left, small, root.val)
        right = dfs(root.right, root.val, large)

        return right and left

    # run the function
    return dfs(root, float('-inf'), float('inf'))

print(validateBinarySearchTree(bst))
print(validateBinarySearchTree(no_bst))