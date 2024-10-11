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
    // case if none
    if(root == null) return 0;

    // case if no children
    if(root.left == null && root.right == null) return 1;

    // case if one children or the other
    let left = root.left ? minDepth(root.left) : Infinity
    let right = root.right ? minDepth(root.right) : Infinity
    return Math.min(left, right) + 1;
};
