/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.queue = [];
    this.size = size;
    
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    
    //if the size of the queue is grater than size, shift one 
    if(this.queue.length >= this.size){
        this.queue.shift();
    }
    
    this.queue.push(val);
    
    //calculate the moving averave
    let total = this.queue.reduce((acc, num) => acc + num, 0)
    return total / this.queue.length
    
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
