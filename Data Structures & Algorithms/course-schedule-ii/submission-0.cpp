class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {

        vector<int> visited(numCourses,false);
        stack<int> st;
        vector<int> res;
        vector<int> inRec(numCourses,false);;
        unordered_map<int, vector<int>> adjList;
        for(int i=0;i<prerequisites.size();i++){
            int courseA = prerequisites[i][0];
            int courseB = prerequisites[i][1];
            adjList[courseB].push_back(courseA);
        }

        for(int i=0;i<numCourses;i++){
            if(!visited[i] && !dfs(i, visited,  st, inRec,adjList)){
                return {};
               
            }
        }

        while(!st.empty()){
            res.push_back(st.top());
            st.pop();
        }
        return res;
    }

    bool dfs(int node, vector<int> &visited,  stack<int>& st, vector<int> &inRec, unordered_map<int, vector<int>> &adjList){
        visited[node]=true;
       inRec[node]=true;
        for(auto neighbour: adjList[node]){
            if(!visited[neighbour] &&   !dfs(neighbour,visited,st,inRec, adjList) ){
                return false;
            }else if( inRec[neighbour]){
                return false;
            }
        }
        st.push(node);
          inRec[node]=false;
        return true;
    }
};
