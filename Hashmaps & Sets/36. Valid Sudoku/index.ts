/**
 * @param board - The 9x9 Sudoku board to validate
 * @returns Whether the board is valid according to Sudoku rules
 */
const isValidSudoku = function(board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
        let set = new Set<string>();

        for (let j = 0; j < 9; j++) {
            let item = board[i][j];

            if (item !== '.' && set.has(item)) {
                return false;
            }
            set.add(item);
        }
    }

    for (let i = 0; i < 9; i++) {
        let set = new Set<string>();

        for (let j = 0; j < 9; j++) {
            let item = board[j][i];

            if (item !== '.' && set.has(item)) {
                return false;
            }
            set.add(item);
        }
    }

    let starts: [number, number][] = [[0, 0], [0, 3], [0, 6],
                                    [3, 0], [3, 3], [3, 6],
                                    [6, 0], [6, 3], [6, 6]];
    
    for (let [startRow, startCol] of starts) {
        let set = new Set<string>();

        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                let item = board[row][col];
                
                if (item !== '.' && set.has(item)) {
                    return false;
                }
                set.add(item);
            }
        }
    }

    return true;
};