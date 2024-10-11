/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let res = [];
    let leftPointer = 0;

    pushed.forEach( num => {
        res.push(num);

        while(res.length > 0 && res[res.length - 1] == popped[leftPointer]){
            res.pop();
            leftPointer++;
        }
    })

    while(res.length > 0 && res[res.length - 1] == popped[leftPointer]){
        res.pop();
        leftPointer++;
    }
    
    return res.length == 0 ? true : false;
};
