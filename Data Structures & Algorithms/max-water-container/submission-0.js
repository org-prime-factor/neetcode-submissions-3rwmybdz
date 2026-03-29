class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
    let ans = 0;
    let left = 0;
    let right = heights.length - 1;
    while (left < right) {
        const water = Math.abs(left - right) * Math.min(heights[left], heights[right]);
        ans = Math.max(ans, water);
        if (heights[left] < heights[right]) {
            left++;
        } else if (heights[left] >= heights[right]) {
            right--;
        }
    }
    return ans;
    }
}
