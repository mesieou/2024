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

const linkedListToArray = (head) => {
    let curr = head;
    let ans = [];
    while (curr != null) {
        ans.push(curr.val);
        curr = curr.next;
    }
    return ans;
}

const res = linkedListToArray(a);

console.log(res);

