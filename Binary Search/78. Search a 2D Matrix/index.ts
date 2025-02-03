function searchMatrix(matrix: number[][], target: number): boolean {
    // (1)
    
    // let result: boolean = false;

    // matrix.flat().map((number) => {
    //     if (number === target) {
    //         result = true;
    //     }
    // })

    // return result;

    // (2)
    let column = matrix.length, row = matrix[0].length;

    let left = 0, right = row * column - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        let i = Math.floor(mid / row);
        let j = mid % row;

        let midNumber = matrix[i][j];

        if (target === midNumber) {
            return true;
        } else if (target > midNumber) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};