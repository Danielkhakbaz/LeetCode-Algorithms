/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(matrix) {
    let ans = [];

    let i = 0, j = 0;

    let m = matrix.length, n = matrix[0].length;

    let direction = "RIGHT";

    let RIGHT_WALL=n, DOWN_WALL=m, LEFT_WALL=-1, UP_WALL=0;

    while (ans.length !== n * m) {
        if (direction === "RIGHT") {
            while (j < RIGHT_WALL) {
                ans.push(matrix[i][j]);

                j++;
            }

            i++;
            j--;

            RIGHT_WALL--;

            direction = "DOWN";
        } else if (direction === "DOWN") {
            while (i < DOWN_WALL) {
                ans.push(matrix[i][j]);

                i++;
            }

            i--;
            j--;

            DOWN_WALL--;

            direction = "LEFT";
        } else if (direction === "LEFT") {
            while (j > LEFT_WALL) {
                ans.push(matrix[i][j]);

                j--;
            }

            i--;
            j++;

            LEFT_WALL++;

            direction = "UP";
        } else if (direction === "UP") {
            while (i > UP_WALL) {
                ans.push(matrix[i][j]);

                i--;
            }

            i++;
            j++;

            UP_WALL++;

            direction = "RIGHT";
        }
    }

    return ans;
};