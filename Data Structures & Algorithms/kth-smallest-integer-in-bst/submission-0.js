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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        function dfs(root){
            // if(k==0)
           if(root==null){
            return;
           }
           let left = dfs(root.left);
           if(left!=null) return left;
            k--;
            if(k==0)
                return root.val;
            return dfs(root.right);
        }
        return dfs(root);
    }
}
