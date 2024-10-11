/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let curr = head;
    let ans = curr.val;

    while(curr && curr.next){
        ans = (ans * 2) + curr.next.val;
        curr = curr.next;
    }
    return ans;
};
