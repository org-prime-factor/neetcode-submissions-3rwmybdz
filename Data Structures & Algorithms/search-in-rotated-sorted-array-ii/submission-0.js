class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let low = 0
        let high = 0;
        if (nums.length == 1) {
            target == nums[0] ? nums[0] : -1;
        }

        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                high = i;
                break;
            }
        }
        if (target >= nums[0] && target <= nums[high]) 
        {
            low = 0;
            high = high;
        }
        else {
            low = high + 1;
            high = nums.length - 1;
        }

        while (low <= high) {
            let mid = Math.trunc((low + high) / 2);
            if (nums[mid] == target)
                return true;
            else if (nums[mid] > target)
                high = mid - 1;
            else
                low = mid + 1;
        }

        return false;
    }
}
