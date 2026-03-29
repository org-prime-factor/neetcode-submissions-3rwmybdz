class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix=[];
        const postfix=new Array(nums.length);
        let val =1;
        for(const num of nums){
            val*=num;
            prefix.push(val);
        }
        val =1;
        for (let i=nums.length-1;i>=0;i--){
            val*=nums[i];
            postfix[i]= val;
        }
        const ans=[postfix[1]];
        for(let i=0;i<nums.length-1;i++){
            if(i+2>=nums.length)
                ans.push(prefix[i]);
           else ans.push(prefix[i] * postfix[i+2]);
        }
        return ans;
    }
}
