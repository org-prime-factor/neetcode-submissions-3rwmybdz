class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let sum =nums[0];
        let maxSum =nums[0];
        for (let i=1;i<nums.length;i++){
            sum = Math.max(nums[i], sum+nums[i]);
            maxSum= Math.max(sum, maxSum);
        }
        return maxSum;
    }
}
