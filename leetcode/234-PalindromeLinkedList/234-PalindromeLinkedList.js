/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let prev = null;
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        fast = fast.next.next;
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    if(fast){
        slow = slow.next;
    }

    while(slow){
        if(slow.val != prev.val){
            return false;
        }
        slow = slow.next;
        prev = prev.next;
    }

    return true;
};