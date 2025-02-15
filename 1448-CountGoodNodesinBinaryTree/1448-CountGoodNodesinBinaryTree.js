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
var goodNodes = function(root) {

    function dfs(node, acc){
        if(node == null) return 0;

        console.log(node.val)
        acc = Math.max(acc, node.val)

        if(node.val >= acc) {
            return 1 + dfs(node.left, acc) + dfs(node.right, acc)
        } else {
            return dfs(node.left, acc) + dfs(node.right, acc);
        }

    }
    return dfs(root, -Infinity);
};