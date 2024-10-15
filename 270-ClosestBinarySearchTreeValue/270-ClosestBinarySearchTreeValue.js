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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    ans = root.val
    const dfs = (node) => {
        if(!node) return

        if(Math.abs(node.val - target) < Math.abs(ans - target)){
            ans = node.val;
        } else if (Math.abs(node.val - target) == Math.abs(ans - target)){
            ans = Math.min(ans, node.val);
        }

        if(target < node.val){
            dfs(node.left);
        } else{
            dfs(node.right);
        }
    }
    dfs(root);

    return ans;
};