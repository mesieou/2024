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
    this.diameter = 0

    const depth = node => {
        if(node == null) return 0;

        let left = depth(node.left);
        let right = depth(node.right);

        this.diameter = Math.max(diameter, left + right);

        return Math.max(left, right) + 1
    }

    depth(root)
    return this.diameter;
    
};
