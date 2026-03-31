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
        if(!root) return [];
        let ans =[];
        let q=[];
        q.push(root);
        while(q.length!=0){
            let len = q.length;
            let level=[];
            for(let i=0;i<len;i++){
                let node = q.shift();
                level.push(node.val);
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }
            ans.push(level);
        }
        return ans;

    }
}
