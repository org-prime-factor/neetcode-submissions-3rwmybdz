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
    rightSideView(root) {
        if(!root) return [];
        let ans =[];
        let q=[];
        q.push(root);
        while(q.length!=0){
            let len = q.length;
            for(let i=0;i<len;i++){
                let node = q.shift();
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
                if(i+1==len){
                    ans.push(node.val)
                }
            }
        }
        return ans ;
    }
}
