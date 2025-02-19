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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(root == null) return [];

    let queue = [root], ans = [];
    let rightToLeft = false;

    while(queue.length){
        let nextQueue = [], res = [];
        for(let i = 0; i < queue.length; i++){
            let currNode = queue[i];
            res.push(currNode.val);

            if(currNode.left) nextQueue.push(currNode.left);
            if(currNode.right) nextQueue.push(currNode.right);
        }

        if(rightToLeft){
            res.reverse();
        }

        ans.push(res);
        rightToLeft = !rightToLeft
        queue = nextQueue;
    }
    
    return ans;
};