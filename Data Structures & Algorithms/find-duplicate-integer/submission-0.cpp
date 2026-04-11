class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        unordered_set<int> unq;
        for(auto num: nums){
            if(unq.contains(num)){
                return num;
            }else{
                unq.insert(num);
            }
        }
        return 0;
    }
};
