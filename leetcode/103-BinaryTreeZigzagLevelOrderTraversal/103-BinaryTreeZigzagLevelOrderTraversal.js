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
    if (!root) return []; 

    let queue = [root];
    let toRight = true;
    let ans = [];

    while(queue.length){
        let nodesCurrentLevel = queue.length;
        let nextQueue = [];
        let res = [];
        for(let i = 0; i < nodesCurrentLevel; i++){
            let node = queue[i];
            res.push(node.val);

            if(node.right) nextQueue.push(node.right);
            if(node.left) nextQueue.push(node.left);
        }

        if(toRight){
            res.reverse();
        }
        ans.push(res)
        queue = nextQueue
        toRight = !toRight;

    }

    return ans;
};