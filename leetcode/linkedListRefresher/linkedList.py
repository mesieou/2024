class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

a = Node('a')
b = Node('b')
c = Node('c')
d = Node('d')
e = Node('e')

a.next = b
b.next = c
c.next = d
d.next = e

# def linked_list_to_array(head):
#     if head == None: return []

#     return [head.val] + linked_list_to_array(head.next)

# res = linked_list_to_array(a)

def linked_list_to_array(head):
    ans = []
    def helper(head):
        if head == None: return 
        ans.append(head.val)
        helper(head.next)
    
    helper(head)
    return ans



res = linked_list_to_array(a)
print(res)
