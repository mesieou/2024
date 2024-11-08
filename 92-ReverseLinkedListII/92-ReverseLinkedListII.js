/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

    // initialize dummy, prev 
    let dummy = new ListNode(), curr = head;
    dummy.next = head;
    leftPrev = dummy;

    // loop left times and move previous and current accordingly
    for(let i = 0; i < (left - 1); i++){
        leftPrev = leftPrev.next
        curr = curr.next
    }
    
    prev = null;
    // loop right minus left times 
    for(let i = 0; i < (right - left) + 1; i++){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    //connect
    leftPrev.next.next = curr;
    leftPrev.next = prev;
    
    return dummy.next
};