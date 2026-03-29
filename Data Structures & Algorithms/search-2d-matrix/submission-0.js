class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length - 1;
    let columns = matrix[0].length - 1;
    let low = 0;
    let high = rows;
    let targetRow = -1;
    while (low <= high) {
        let mid = Math.trunc((low + high) / 2);
        if (target >= matrix[mid][0] && target <= matrix[mid][columns]) {
            targetRow = mid;
            break;
        }
        else if (target < matrix[mid][0])
            high = mid - 1;
        else
            low = mid + 1;
    }
    if (targetRow == -1)
        return false;
    low = 0;
    high = columns;
    while (low <= high) {
        let mid = Math.trunc((low + high) / 2);
        if (target == matrix[targetRow][mid]) {
            return true;

        } else if (target > matrix[targetRow][mid])
            low = mid + 1;
        else
            high = mid - 1;
    }
    return false;
    }
}
