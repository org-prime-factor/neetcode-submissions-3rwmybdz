class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l =0;
        let r =0;
        let freq={}
        let maxWLen=0;
        let maxFreq=0;
        while(r<s.length){
            let wlen = (r-l)+1;
            freq[s[r]]= (freq[s[r]]||0)+1;
            maxFreq = Math.max(maxFreq,  freq[s[r]]);
            if((wlen - maxFreq) <= k){
                maxWLen=Math.max(maxWLen, wlen)
            }else  if((wlen - freq[s[r]]) > k){
                freq[s[l]] = (freq[s[l]])-1;
                maxFreq = 0;
                for(const key in freq){
                    maxFreq = Math.max(maxFreq,  freq[key]);
                }
                l++;
                // maxWLen=Math.max(maxWLen, wlen)
            }
            r++;
        }
        return maxWLen;
    }
}
