# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        prev = None

        if left == right:
            return head
        
        #create curr and before curr
        curr = head
        dummy = ListNode(0)
        dummy.next = head
        before_curr = dummy
        
        # iterate left minus one times 
        for _ in range(left - 1):
          #move curr and before curr
          curr = curr.next
          before_curr = before_curr.next
        
        #create subhead and and before subhead
        sub_head = curr
        before_sub_head = before_curr
        
        #reverse right minus left plus one times
        for _ in range(right - left + 1):
            nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = nextNode
        
        #update subhead and before subhead pointers
        sub_head.next = curr
        before_sub_head.next = prev
        
        return dummy.next
