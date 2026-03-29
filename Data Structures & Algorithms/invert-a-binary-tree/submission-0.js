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
     * @return {TreeNode}
     */
    invertTree(root) {
        function traverse(root) {
        if (root != null) {
            let tmp = root.left;
            root.left = root.right;
            root.right = tmp;
            traverse(root.left);
            traverse(root.right);
        }
    }
    traverse(root);
    return root;
    }
}
