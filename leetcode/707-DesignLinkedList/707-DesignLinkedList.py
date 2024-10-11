class ListNode:
    def __init__(self,  val=0, next=None):
        self.val = val
        self.next = next

class MyLinkedList:
    def __init__(self):
        self.head = ListNode(0)
        self.size = 0

    def get(self, index: int) -> int:
        
        curr = self.head.next
        while curr and index > 0:
            curr = curr.next
            index -= 1
        
        if curr and index == 0:
            return curr.val
        else:
            return -1
        

    def addAtHead(self, val: int) -> None:
        newNode = ListNode(val)
        curr = self.head.next
        self.head.next = newNode
        newNode.next = curr

        

        

    def addAtTail(self, val: int) -> None:
        newNode = ListNode(val)
        prev = self.head
        curr = self.head.next

        while curr:
            curr = curr.next
            prev = prev.next
        
        prev.next = newNode

        

    def addAtIndex(self, index: int, val: int) -> None:
        newNode = ListNode(val)
        curr = self.head
        
        while curr and index > 0:
            curr = curr.next
            index -= 1
        
        if curr:
            next = curr.next
            curr.next = newNode
            newNode.next = next

        

    def deleteAtIndex(self, index: int) -> None:
        curr = self.head.next
        prev = self.head
        
        while curr and index > 0:
            curr = curr.next
            prev = prev.next
            index -= 1
        
        if curr:
            prev.next = curr.next

        


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)
