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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        function dfs(root, p, q){
            if(root==null){
               return null;
            }else{
                 if(root.val <p && root.val<q){
                   return dfs(root.right, p,q);
                }else if(root.val >p && root.val>q){
                    return dfs(root.left, p,q);
                }else{
                    return root;
                }
            }
        }

        return dfs(root, p.val, q.val);
    }
}
