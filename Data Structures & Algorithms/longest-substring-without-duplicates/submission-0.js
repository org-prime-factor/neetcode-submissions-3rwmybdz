class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLen = 0;
        let hashSet = new Set();
        let idx = 0;
        for (let i = 0; i < s.length; i++) {
            if (!hashSet.has(s[i])) {
                hashSet.add(s[i]);
            } else {
                while (s[idx] !== s[i]) {
                    hashSet.delete(s[idx]);
                    idx++;
                }
                hashSet.delete(s[idx]);
                idx++;
                hashSet.add(s[i]);
            }
            maxLen = Math.max(maxLen, hashSet.size)
        }
        return maxLen;
    }
}
