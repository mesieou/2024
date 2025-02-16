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
var minDepth = function(root) {
    //Base case where no nodes
    if (root == null) return 0;

    dfs = (node) => {
        //Case 2 where only one child is null
        if (node == null) return Infinity;
        
        //Case 3 where node is leaf
        if(node.left == null && node.right == null) return 1

        //Case 4 where node has both children
        return 1 + Math.min(dfs(node.left), dfs(node.right))
    }
    return dfs(root)
};