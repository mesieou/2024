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
    if(!root) return []
    let queue = [root], largestValues = [];

    while(queue.length){
        let currLevel = queue.length;
        let currLargest = -Infinity;
        for(let i = 0; i < currLevel; i++){
            let currNode = queue.shift();
            currLargest = Math.max(currLargest, currNode.val);

            if(currNode.left) queue.push(currNode.left);
            if(currNode.right) queue.push(currNode.right);
        }
        largestValues.push(currLargest);
    }
    return largestValues
};