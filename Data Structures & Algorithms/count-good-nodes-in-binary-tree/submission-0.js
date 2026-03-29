/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
          let goodNodes = 0;
    let prev = root.val;
    function dfs(root, prev) {
        if (root != null) {
            if (root.val >= prev) {
                goodNodes++;
            }
            dfs(root.left, Math.max(root.val, prev));
            dfs(root.right, Math.max(root.val, prev));

        }
    }
    dfs(root, prev);
    return goodNodes
    }
}
