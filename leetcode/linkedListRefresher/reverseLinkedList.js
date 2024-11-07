class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const reverseLinkedList = (head) => {
    let curr = head;
    let prev = null

    while (curr != null) {
        let next = curr.next
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev
}

const res = reverseLinkedList(a);
console.log(res);