function spiralOrder(matrix: number[][]): number[] {
    let DIRECTION = "RIGHT";

    let UP_WALL = 0;
    let RIGHT_WALL = matrix[0].length;
    let DOWN_WALL = matrix.length;
    let LEFT_WALL = -1;

    const result: number[] = [];

    let row = 0;
    let column = 0;

    while (result.length !== matrix[0].length * matrix.length) {
        if (DIRECTION === "RIGHT") {
            while (column < RIGHT_WALL) {
                result.push(matrix[row][column]);

                column++;
            }

            column--;
            row++;
            
            RIGHT_WALL--;

            DIRECTION = "DOWN";
        } else if (DIRECTION === "DOWN") {
            while (row < DOWN_WALL) {
                result.push(matrix[row][column]);

                row++;
            }

            row--;
            column--;

            DOWN_WALL--;
            
            DIRECTION = "LEFT";
        } else if (DIRECTION === "LEFT") {
            while (column > LEFT_WALL) {
                result.push(matrix[row][column]);

                column--;
            }

            row--;
            column++;

            LEFT_WALL++;

            DIRECTION = "UP";
        } else if (DIRECTION === "UP") {
            while (row > UP_WALL) {
                result.push(matrix[row][column]);

                row--;
            }

            row++;
            column++;

            UP_WALL++;

            DIRECTION = "RIGHT";
        }
    }

    return result;
};