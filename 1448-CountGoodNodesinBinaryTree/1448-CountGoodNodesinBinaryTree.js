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
    const dfs = (root, gratestNum) => {
        if(root == null) return 0;
        gratestNum = Math.max(gratestNum, root.val);

        // if(!root.left && !root.right && root.val >= gratestNum) return 1;

        if (root.val >= gratestNum){
            return 1 + dfs(root.left, gratestNum) + dfs(root.right, gratestNum);
        } else{
            return dfs(root.left, gratestNum) + dfs(root.right, gratestNum)
        }
    }
    
    return dfs(root, -Infinity)
};