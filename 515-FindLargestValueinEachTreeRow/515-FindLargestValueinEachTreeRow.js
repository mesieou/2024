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
 * @return {number[]}
 */
var largestValues = function(root) {
    if(root == null) return [];
    let queue = [root];
    let ans = [];

    while(queue.length){
        let highest = -Infinity
        let nextQueue = []
        for(let i = 0; i < queue.length; i++){
            let currNode = queue[i]
            highest = Math.max(highest, currNode.val)

            if(currNode.left) nextQueue.push(currNode.left)
            if(currNode.right) nextQueue.push(currNode.right)
        }
        ans.push(highest)
        queue = nextQueue
    }
    return ans;
};