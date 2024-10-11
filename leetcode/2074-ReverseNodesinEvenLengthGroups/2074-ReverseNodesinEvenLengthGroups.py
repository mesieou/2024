class Solution:
    def reverseEvenLengthGroups(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Initialise group size to 1
        group_size = 1

        # Initialize dummy node and connect it
        dummy = ListNode(0)
        dummy.next = head

        # Initialize previous and current pointers
        prev = dummy
        curr = head

        while curr:
            # Calculate the actual group size
            temp = curr
            actual_group_size = 0
            for _ in range(group_size):
                if temp:
                    temp = temp.next
                    actual_group_size += 1
                else:
                    break
            
            # Track the start of the group
            start_group = curr
            end_group = curr
            for _ in range(actual_group_size - 1):
                end_group = end_group.next

            if actual_group_size % 2 == 0:
                # Reverse the group
                prev_group = prev
                prev = None
                tail_group = end_group.next  # The node after the group

                for _ in range(actual_group_size):
                    next_node = curr.next
                    curr.next = prev
                    prev = curr
                    curr = next_node
                
                # Connect the reversed group to the rest of the list
                prev_group.next = prev
                start_group.next = tail_group
                prev = start_group # **Fix: make sure the tail is connected properly**

            else:
                # Move the pointers for odd-length groups
                for _ in range(actual_group_size):
                    prev = curr
                    curr = curr.next

            # Increment group size for the next iteration
            group_size += 1   

        return dummy.next
