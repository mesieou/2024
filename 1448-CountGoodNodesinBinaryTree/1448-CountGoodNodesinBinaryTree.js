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

        acc = Math.max(acc, node.val)

        let ans = dfs(node.left, acc) + dfs(node.right, acc)
        
        if(node.val >= acc) {
            ans++;
        }
        return ans;
    }
    return dfs(root, -Infinity);
};