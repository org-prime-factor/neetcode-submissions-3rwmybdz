class Solution {
public:
    vector<bool> checkIfPrerequisite(int numCourses,
                                     vector<vector<int>>& prerequisites,
                                     vector<vector<int>>& queries) {
        /*
            solving using DFS so we will explore the path of range queries,
            if we can vj from uj it means its a pre req and return true else
           false.
        */

        vector<bool> visited(numCourses, false);
        vector<bool> res(queries.size(), false);
        unordered_map<int, vector<int>> adjList;
        for (int i = 0; i < prerequisites.size(); i++) {
            int courseA = prerequisites[i][0];
            int courseB = prerequisites[i][1];
            // Creating adj list that says you must take course A before Course B
            adjList[courseA].push_back(courseB);
        }
        for (int i = 0; i < queries.size(); i++) {
            // We are recreaying visited vector which will not have previous visted graph nodes state
            vector<bool> visited(numCourses, false);
            // Here we are calling dfs from src to dest.
            res[i] = dfs(queries[i][0], queries[i][1], visited, adjList);
        }
        return res;
    }

    bool dfs(int src, int dest, vector<bool>& visited,
             unordered_map<int, vector<int>>& adjList) {
        // The first thing to do is mark the node as visited as we dont want to visit the path again
        visited[src] = true;
        // Now we iterate over all the connection that are linked to current source.
        for (auto neighbour : adjList[src]) {
            // if one of the node, that is linked to src matches with destination we say
            // yes the course A is pre req of course B
            if (neighbour == dest) {
                // And we return true,
                return true;
            } else if (!visited[neighbour]) {
                // So here we visit the visited path and call DFS further
                if (dfs(neighbour, dest, visited, adjList))
                // We call dfs and rerach till the very end of dfs
                // if we still cant find any node we would return false
                // So we go back in dfs and explore the unexplored path may be 
                // we can find the pre req in another path , so we keep exploring 
                // If we any where find that x is pre req of y we return true
                // If we return true any where we can say, yes the pre req is valid
                // else keep on searching thr graph adjList.
                    return true;
            }
        }
        // If we dont ever find if its a valid preq by explore the dfs path of graph 
        // completely we say that in this path we can confirm that x is not pre req of y and 
        // return false;
        return false;
    }
};