/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let slow = head;
    let fast = head;
    let dummy = new ListNode()
    dummy.next = head;

    for(let i = 0; i < k - 1; i++){
        fast = fast.next;
    }

    let firstNode = fast;

    fast = fast.next;

    while(fast){
       fast = fast.next;
       slow = slow.next;
    }
    let temp = firstNode.val;
    firstNode.val = slow.val;
    slow.val = temp;


    return dummy.next
};
