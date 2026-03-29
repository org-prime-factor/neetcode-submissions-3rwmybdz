class Solution {
public:
    int countComponents(int n, vector<vector<int>>& edges) {
        int count = 0;
        vector<int> visited(n, false);

        unordered_map<int, vector<int>> graph;
         for (int i = 0; i < edges.size(); i++) {
           int u = edges[i][0];
           int v = edges[i][1];
           graph[u].push_back(v);
           graph[v].push_back(u);
        }
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                count++;
                dfs(i,visited,graph);
            }
        }
        return count;
    }
    void dfs(int node, vector<int>& visited,  unordered_map<int, vector<int>>& graph) {
        visited[node] = true;
        for (auto neighbor : graph[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor, visited, graph);
            }
        }
    }
};