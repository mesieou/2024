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
var pairSum = function(head) {
    let fast = head;
    
    let curr = head;
    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    let ans = 0


    while(curr){
        if(fast){
            let subHead = curr;
            while(fast){
                fast = fast.next.next;
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            subHead.next  = curr;
            dummy.next = prev;
        }
        ans = Math.max(ans, prev.val + curr.val);
        prev = prev.next;
        curr = curr.next;
    }
    return ans;
    
};