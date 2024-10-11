var ListNode = function(val = 0, next = null) {
    this.val = val;
    this.next = next;
}
var MyLinkedList = function() {
    this.head = new ListNode();
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let curr = this.head.next;

    while(curr && index > 0){
        curr = curr.next;
        index--;
    }

    if(index == 0 && curr){
        return curr.val;
    } else {
        return -1
    }
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let curr = this.head.next;
    let prev = this.head;

    let newNode = new ListNode(val);

    prev.next = newNode;
    newNode.next = curr;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let curr = this.head.next;
    let prev = this.head;
    let newNode = new ListNode(val);

    while(curr){
        curr = curr.next;
        prev = prev.next;
    }

    prev.next = newNode;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let prev = this.head;
    let curr = this.head.next;
    let newNode = new ListNode(val);

    while(prev && index > 0){
        prev = prev.next
        index--;
    }

    if(prev){
        let next = prev.next;
        prev.next = newNode;
        newNode.next = next;
    }
    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let curr = this.head.next;
    let prev = this.head;

    while(curr && index > 0){
        curr = curr.next;
        prev = prev.next;
        index--;
    }

    if(curr){
        prev.next = curr.next;
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */