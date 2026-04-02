class Solution {
public:
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int maxArea=0;
        int area =0;
        // vector<int> 
        /*
        I would iterate over the grid from 0,0
        and when i encounter a 1, i will invoke dfs function
        it will explore in all direction, it would return when it encounters 0
        goes out of grid, or visits a visited node again.

        We would mark a grid as visited if we visit it for the first time and turn
        the 1 into -1
        so in the dfs call whenver we enocunter 1 we would increment the area suggesting
        that we exploring belongs to the current island

        once we come back of dfs call initiated in loop we will update maxArea;
        
        */
        
        int n= grid.size();
        int m = grid[0].size();
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]==1){
                   maxArea = max(maxArea, dfs(i,j,area,grid));
                }
               
            }
        }


        return maxArea;
    }

   int dfs(int row, int col,int area, vector<vector<int>>& grid){
        int n= grid.size();
        int m = grid[0].size();

        if(row<0 ||row>=n ||col<0||col>=m || grid[row][col]==0 || grid[row][col]==-1){
            return area;
        }
        grid[row][col]=-1;
        area++;
        area =dfs(row+1, col,area, grid);
       area= dfs(row-1, col,area, grid);
        area = dfs(row, col+1,area, grid);
       area= dfs(row, col-1,area, grid);
       return area;
    }

};
