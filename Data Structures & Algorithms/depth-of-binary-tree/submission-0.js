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
    maxDepth(root) {
         let currDepth = 0;
    let depth = 0
    function traverse(root) {
        if (root != null) {
            currDepth++;
            traverse(root.left);
            depth = Math.max(depth, currDepth)
            traverse(root.right);
            currDepth--;
        }
    }
    traverse(root);
    return depth;

    }
}
