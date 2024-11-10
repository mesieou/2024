/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
   let dummy = new ListNode(0, head);
   let curr = head, prev = dummy;

   while(curr != null){
    while(curr != null && curr.val == val) {
        prev.next = curr.next;
        curr = curr.next
        
    }
    if(curr != null) {
        prev = curr;
        curr = curr.next;
    }
   }
   return dummy.next;
};