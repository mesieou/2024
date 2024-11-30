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
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    const dfs = (root) => {
        if(!root) return 0;

        //retursive call stacks;
        let left = dfs(root.left)
        let right = dfs(root.right);

        // once there is no more children on the current path, calculate the diameter
        diameter = Math.max(diameter, left + right);

        //return the diameter from the current call stack
        return  1 + Math.max(left, right);
    }
    dfs(root);

    return diameter;
};