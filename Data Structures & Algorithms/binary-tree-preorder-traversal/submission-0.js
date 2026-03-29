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
     * @return {number[]}
     */
    preorderTraversal(root) {
        let result = [];
    //  left right root.
    function traverse(root) {
        if (root != null) {
            result.push(root.val);
            traverse(root.left);
            traverse(root.right);

        }
    }

    traverse(root);
    return result;
    }
}
