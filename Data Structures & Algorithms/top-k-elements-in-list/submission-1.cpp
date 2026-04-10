class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> freq;
        vector<vector<int>>count(nums.size()+1);
        vector<int> topK;
        for(auto num: nums){
            freq[num]++;
        }

        for (auto &pair: freq){
            count[pair.second].push_back(pair.first);
        }

        for(int i=count.size()-1;i>0;i--){
            for(int j= 0;j<count[i].size();j++){
                cout<<"Here"<<i<< " "<<j<<endl;
                topK.push_back(count[i][j]);
                if(topK.size()>=k){
                    return topK;
                }
            }
        }
        return topK;

    }
};
