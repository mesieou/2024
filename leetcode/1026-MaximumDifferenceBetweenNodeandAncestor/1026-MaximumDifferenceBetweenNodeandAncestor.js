/**
 * Definition for a binary tree node.
 * function TreeNode(val, right, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    const helper = (node, currMax, currMin) => {
        if (node == null) return currMax - currMin;

        currMax = Math.max(currMax, node.val);
        currMin = Math.min(currMin, node.val);

        let leftDifference = helper(node.left, currMax, currMin);
        let rightDifference = helper(node.right, currMax, currMin);

        return Math.max(leftDifference, rightDifference);
    }
    return helper(root, root.val, root.val);
};