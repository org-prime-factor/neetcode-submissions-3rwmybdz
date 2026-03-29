class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq= {};
        for(const num of nums){
           if(freq[num]==undefined){
            freq[num]=1;
           }else{
            freq[num]++;
           }
        }

        const buckets = [];
        for(let i=0;i<=nums.length;i++){
            buckets.push([]);
        }

        for(const num in freq){
            buckets[freq[num]].push(Number(num));
        }

        const ans =[];
        for(let i=buckets.length - 1; i>=0;i--){
            for (const val of buckets[i]) {
                ans.push(val);
                if(ans.length == k) return ans;
            }
        }
        return ans;
    }
}
