class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].length)
            for (let j = 0; j < matrix[i].length; j++) {
                console.log(matrix[i][j])
                if (matrix[i][j] == target) {
                    return true;
                }
            }
        }
        return false;
    }
}
