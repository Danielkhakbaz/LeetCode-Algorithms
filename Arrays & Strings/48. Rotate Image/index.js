/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
    // (1)
    // const len = matrix.length;

    // for (let i=0; i<len; i++) {
    //     for (let j=i+1; j<len; j++) {
    //         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    //     }
    // }

    // for (let i=0; i<len; i++) {
    //     for (let j=0; j<len / 2; j++) {
    //         [matrix[i][j], matrix[i][len - j - 1]] = [matrix[i][len - j - 1], matrix[i][j]];
    //     }
    // }

    // (2)
    for (let i=0; i<matrix[0].length; i++) {
        for (let j=i+1; j<matrix[0].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i=0; i<matrix[0].length; i++) {
        matrix[i].reverse();
    }

    return matrix;
};