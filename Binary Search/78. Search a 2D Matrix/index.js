/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {
    let row = matrix[0].length;
    let column = matrix.length;
    let l = 0;
    let r = row * column - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let i = Math.floor(mid / row);
        let j = mid % row;

        let midNumber = matrix[i][j];

        if (target === midNumber) {
            return true;
        } else if (target < midNumber) {
            r = mid - 1;
        } else if (target > midNumber) {
            l = mid + 1;
        }
    }

    return false;
};