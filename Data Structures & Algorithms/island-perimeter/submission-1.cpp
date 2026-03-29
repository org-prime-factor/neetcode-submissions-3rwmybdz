class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();
        int perimeter = 0;
        queue<pair<int, int>> q;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] == 1) {
                    q.push({i, j});
                    break;
                    // we found land;
                    // Now need to find the rest
                }
            }
            if(!q.empty()) break;
        }

        while (!q.empty()) {
            pair<int, int> land = q.front();
            q.pop();
            int row = land.first;
            int col = land.second;
            if (grid[row][col] == 1) {
                grid[row][col] = -1;
            } 
            row = row - 1;
            col = col;
            if (row < 0)
                perimeter++;
            else if (grid[row][col] == 1) {
                q.push({row, col});
                 grid[row][col] = -1;
            }else if (grid[row][col] == 0) {
                perimeter++;
            }
            row = land.first + 1;
            if (row >= n)
                perimeter++;
            else if (grid[row][col] == 1) {
                q.push({row, col});
                 grid[row][col] = -1;
            }else if (grid[row][col] == 0) {
                perimeter++;
            }
            row = land.first;
            col = col - 1;
            if (col < 0)
                perimeter++;
            else if (grid[row][col] == 1) {
                q.push({row, col});
                 grid[row][col] = -1;
            }else if (grid[row][col] == 0) {
                perimeter++;
            }

            col = land.second + 1;
            if (col >= m)
                perimeter++;
            else if (grid[row][col] == 1) {
                q.push({row, col});
                 grid[row][col] = -1;
            }else if (grid[row][col] == 0) {
                perimeter++;
            }
        }
        return perimeter;
    }
};