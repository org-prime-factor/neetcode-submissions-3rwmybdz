class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        unordered_map<int, vector<int>> adjList;
        vector<int> inDegree(numCourses, 0);// this tell what all courses we can complete without any dependency;
        for(int i=0;i<prerequisites.size();i++){
            int courseA = prerequisites[i][0];
            int courseB = prerequisites[i][1];
            adjList[courseB].push_back(courseA);
            inDegree[courseA]++;
        }
        queue<int> q;
        int completedCourses = 0;
        for(int course=0;course<inDegree.size();course++){
            if(inDegree[course]==0){
                q.push(course);
                completedCourses++;
            }
        }

        while(!q.empty()){
            int course = q.front();
            q.pop();
            for(auto eachCourse: adjList[course]){
                inDegree[eachCourse]--;
                if(inDegree[eachCourse]==0){
                    q.push(eachCourse);
                    completedCourses++;
                }
            }
        }
        return completedCourses==numCourses;
        
    }
};
