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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root==null) return [];
        const result =[];
        function bfs(root){
            const q = [root]
            let f = 0;
            while(f<q.length) {
                let len = q.length-f;
                const level=[];
                for(let i=0;i<len;i++){
                    let node = q[f++];
                    level.push(node.val);
                    if(node.left!=null) q.push(node.left);
                    if(node.right!=null) q.push(node.right);
                }
                result.push(level);
            }
        }
        bfs(root);
        return result;

    }
}

