# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        dummy = ListNode(val=0)
        curr = head
        prev = dummy

        dummy.next = head

        while curr:
            if curr.val == val:
                prev.next = prev.next.next
            else:
                prev = prev.next
            
            curr = curr.next
        
        return dummy.next  
