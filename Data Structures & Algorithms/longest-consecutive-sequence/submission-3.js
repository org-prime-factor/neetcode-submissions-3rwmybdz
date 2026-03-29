class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const unq = new Set();
        for(const num of nums){
            unq.add(num);
        }
        let ans =0;
        let seq =0;
        for(const num of nums ){
            if(unq.has(num-1)){
                continue;
            }else {
                for(let i=0;i<nums.length;i++){
                    if(unq.has(num+i)){
                        seq++;
                    }else{break;}
                }
                ans = Math.max(ans, seq);
                seq=0;
            }
        }
        return ans;
    }
}
