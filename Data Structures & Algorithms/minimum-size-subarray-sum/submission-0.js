class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0;
        let sum = 0;
        let minWLen = Infinity;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            while (sum >= target) {
                let wlen = (i - l) + 1;
                minWLen = Math.min(minWLen, wlen);
                sum = sum - nums[l];
                l++;
            }
        }
        return minWLen === Infinity ? 0 : minWLen;
    }
}
