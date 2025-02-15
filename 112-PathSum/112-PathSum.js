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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root == null) return false;

    stack = [[root, 0]];

    while(stack.length) {
        let [node, acc] = stack.pop()
         
        acc += node.val

        if(!node.left && !node.right){
            if(acc == targetSum) return true
        }

        if(node.left) stack.push([node.left, acc])
        if(node.right) stack.push([node.right, acc])
    }

    return false;
};