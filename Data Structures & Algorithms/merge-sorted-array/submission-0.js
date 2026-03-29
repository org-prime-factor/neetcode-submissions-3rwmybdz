class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let zeroPtr=m+n-1;
        let idxn=n-1;
        let idxm=m-1;
        
        while (idxn >= 0) {
            if (idxm >= 0 && nums1[idxm] > nums2[idxn]) {
                nums1[zeroPtr] = nums1[idxm];
                idxm--;
            } else {
                nums1[zeroPtr] = nums2[idxn];
                idxn--;
            }
            zeroPtr--;
        }
    }
}
