/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let queue = [root];
    let sum = 0;
    
    while(queue.length){
        let nextQueue = [];
        let nodesInCurrLevel = queue.length;
        sum = 0;
        
        for(let i = 0; i < nodesInCurrLevel; i++){
            let node = queue[i]
            sum += node.val
            
            if(node.left) nextQueue.push(node.left);
            if(node.right) nextQueue.push(node.right);
        }
        
        queue = nextQueue;
    }
    
    return sum
};