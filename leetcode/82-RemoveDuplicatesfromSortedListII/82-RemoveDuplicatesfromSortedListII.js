/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;
    let dummy = new ListNode();
    dummy.next = head;
    let previous = dummy;
    
    while(current){
        while(current.next && current.val == current.next.val){
            current = current.next;
        }

        if(previous.next == current){
            previous = previous.next;
        } else {
            previous.next = current.next;
        }

        current = current.next;
    }
    return dummy.next;
};