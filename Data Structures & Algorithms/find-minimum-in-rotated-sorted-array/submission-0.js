class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0
        let high = 0;
        if (nums.length == 1) {
            return nums[0];
        }
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                high = i;
                break;
            }
        }

        return Math.min(nums[low], nums[high + 1]);
    }
}
