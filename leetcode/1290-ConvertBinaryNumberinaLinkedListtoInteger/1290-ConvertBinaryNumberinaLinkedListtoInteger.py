# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        curr = head        
        ans = curr.val

        while curr and curr.next:
            ans = (ans * 2) + curr.next.val
            
            curr = curr.next
        
        return ans
            
