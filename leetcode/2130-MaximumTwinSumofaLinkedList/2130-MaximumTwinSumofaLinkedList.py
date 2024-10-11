# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        dummy = ListNode(val=0)
        dummy.next = head
        prev = dummy

        slow = head
        fast = head
        curr = head

        ans = 0

        while curr:
            if fast:
                #set head and tail of half of the list
                sub_head = curr
                #reverse first half of the list
                while fast:
                    fast = fast.next.next
                    next = curr.next
                    curr.next = prev
                    prev = curr
                    curr = next
                #connect the reverse half with the second half
                sub_head.next = curr
                dummy.next = prev

            # calculate sum and update the max
            ans = max(ans, prev.val + curr.val)
            prev = prev.next
            curr = curr.next
        
        return ans

        
