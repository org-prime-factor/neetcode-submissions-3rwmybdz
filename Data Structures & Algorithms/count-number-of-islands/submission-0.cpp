class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        if(grid.empty()) return 0;
        int n = grid.size();
        int m = grid[0].size();
        vector<vector<bool>> vis(n, vector<bool>(m, false));

        int count =0;

        for(int i=0;i<n;i++){
            for(int j=0;j<m ;j++){
                if(grid[i][j]=='1' && !vis[i][j]){
                    dfs(i,j, grid, vis);
                    count++;
                }
            }
        }
        return count;
    }

    void dfs(int i, int j, vector<vector<char>>& grid,vector<vector<bool>> &vis){
        int n = grid.size();
        int m = grid[0].size();
        if(i<0 || j<0 || i>=n||j>=m) return;

        if(grid[i][j]=='0'|| vis[i][j]) return;
        vis[i][j]= true;
        //dfs up
        dfs(i+1, j, grid,vis);
        //dfs down
        dfs(i-1, j, grid, vis);
        //dfs left
        dfs(i, j+1, grid, vis);
        //dfs right
        dfs(i, j-1, grid, vis);


    }
};
