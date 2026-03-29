class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums=nums.sort((a,b)=>a-b);
        const usedNum= new Set();
        const ans =[];
        for(let i=0;i<nums.length;i++){
            let a= nums[i];
            // if(usedNum.has(a)){
                // continue;
            // }else{
                // usedNum.add(a);
                let left = i+1;
                let right = nums.length-1;
                while(left<right){
                    let sum = Math.abs(nums[left]+nums[right]);
                    let target = Math.abs(nums[i])
                    if(sum==target){
                        let ans =`${a}_${nums[left]}_${nums[right]}`;
                        if(!usedNum.has(ans))
                            usedNum.add(ans);
                        left++;
                        right--;
                        // break;
                    }else if(sum>target){
                        right--;
                    }else{
                        left++;
                    }
                }
            // }
        }
       for (const item of usedNum) {
        // console.log("item", item);
            ans.push(item.split("_").map(num=>Number(num)));
        }
        return ans;
    }
}
