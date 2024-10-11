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
var reverseEvenLengthGroups = function(head) {
    let curr = head;
    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    groupSize = 1;

    while(curr){
        actualGroupSize = 0;
        temp = curr;
        for(let i = 0; i < groupSize; i++){
            if(temp){
                temp = temp.next;
                actualGroupSize++;
            } else{
                break;
            }
        }

        let startGroup = curr;
        let endGroup = curr;

        for(let i = 0; i < (actualGroupSize - 1); i++){
            endGroup = endGroup.next;
        }

        if(actualGroupSize % 2 == 0){
            let prevGroup = prev;
            prev = null;
            let tailGroup = endGroup.next;

            for(let i = 0; i < actualGroupSize; i++){
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }

            prevGroup.next = prev;
            startGroup.next = tailGroup;
            prev = startGroup;
            
        } else {
            for(let i = 0; i < actualGroupSize; i++){
                prev = curr;
                curr = curr.next;
            }
        }
        groupSize++;
    }
    
    return dummy.next;
};
