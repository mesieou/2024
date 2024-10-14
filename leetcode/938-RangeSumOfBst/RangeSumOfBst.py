# create a node class
class Node:
    def __init__(self, val):
        self.val = val
        self.right = None
        self.left = None

# create a bst class
class Bst:
    def __init__(self):
        self.root = None
        
    # create an add node method within the best class
    def add(self, num):
        # if the bst tree is empty add the new node as the root
        if not self.root:
            self.root = Node(num)
        else:
            # create a function that will be recursive
            def search_tree(node):
                # if the num is less than the tree add it to the right
                if num < node.val:
                    if not node.left:
                        node.left = Node(num)
                        return f"Node {node.left.val} was created"
                    else:
                        search_tree(node.left)

                # if the num is more than the root add it to the left
                elif(num > node.val):
                    if not node.right:
                        node.right = Node(num)
                        return f"Node {node.right.val} was created"
                    else:
                        search_tree(node.right)
                else:
                    return 
                
            # call the recurside function for the first time
            search_tree(self.root)

#created the first bst        
my_first_bst = Bst()

#added nodes to the bst
my_first_bst.add(5)
my_first_bst.add(3)
my_first_bst.add(10)
my_first_bst.add(20)
my_first_bst.add(1)

print(my_first_bst)

# create a sumwithing range function for bst