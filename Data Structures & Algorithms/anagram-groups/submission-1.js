class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sortedWords = {};
    for (let i = 0; i < strs.length; i++) {
        let sortedWord = strs[i].split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
        if (sortedWords[sortedWord] == undefined) {
            sortedWords[sortedWord] = [strs[i]];
            continue;
        }
        sortedWords[sortedWord].push(strs[i]);
    }
    let ans = [];
    for (const sortedWord in sortedWords) {
        ans.push(sortedWords[sortedWord]);
    }
    return ans;
    }
}
