class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
    let l = 0;
    let r = 0;
    let s1len = s1.length;
    let s1Map = {};
    for (const c of s1) {
        s1Map[c] = (s1Map[c] || 0) + 1
    }
    let s2Map = {}
    while (r < s2.length) {
        let wlen = (r - l) + 1;
        s2Map[s2[r]] = (s2Map[s2[r]] || 0) + 1;
        if (wlen == s1len) {
            for (const key in s1Map) {
                if (s2Map[key] == undefined || s2Map[key] !== s1Map[key]) {
                    s2Map[s2[l]]--;
                    if (s2Map[s2[l]] == 0) {
                        delete s2Map[s2[l]];
                    }
                    l++;
                    break;
                }
            }
            wlen = (r - l) + 1;
            if (wlen == s1len) {
                return true;
            }
        }
        r++;
    }
    return false;
    }
}
