class Solution:
    def swapNodes(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        current = head
        dummy = ListNode(val=0)
        dummy.next = head
        
        slow = head
        fast = head

        for _ in range(k - 1):
            fast = fast.next

        first_node = fast

        fast = fast.next

        while fast:
            slow = slow.next
            fast = fast.next
        
        first_node.val, slow.val = slow.val, first_node.val

        return dummy.next
