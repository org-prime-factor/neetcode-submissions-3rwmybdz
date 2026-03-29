class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let idxMap = {};
        for (let i = 0; i < nums.length; i++) {
            if (idxMap[nums[i]] == undefined) {
                idxMap[nums[i]] = i;
            } else {
                if (Math.abs(i - idxMap[nums[i]]) <= k) {
                    return true;
                } else {
                    idxMap[nums[i]] = i;
                }
            }
        }
        return false;
    }
}
