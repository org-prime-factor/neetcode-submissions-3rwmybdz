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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
            function traverse(root) {
        if (root == null) {
            return null;
        }
        if (root.val < key) {
            root.right = traverse(root.right);
        }
        else if (root.val > key) {
            root.left = traverse(root.left);
        }
        else {
            if (!root.left)
                return root.right
            else if (!root.right)
                return root.left
            else {
                let temp = rightestChildOfLeftTree(root);
                root.val = temp.val;
                key = temp.val;
                root.left = traverse(root.left);
                return root;
            }
        }
        return root;
    }

    function rightestChildOfLeftTree(root) {
        let node = root.left
        while (node.right != null) {
            node = node.right;
        }
        return node;
    }

    return traverse(root);
    }
}
