class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let ans =[];
        let subset =[];
        function dfs(idx,){
            // We check the susbet
            if(idx >=nums.length){
                ans.push([...subset]);
                return;
            }
            // lets go left and include the item
            subset.push(nums[idx]);
            // now as we included the item lets iterate and include one more
            dfs(idx+1);

            // going right of the tree
            // we remove the added item
            subset.pop();
            dfs(idx+1);

            
        }
        dfs(0)
        return ans;
    }
}
