class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        # Check rows
        for i in range(9):
            seen = set()
            for j in range(9):
                item = board[i][j]
                if item != '.' and item in seen:
                    return False
                seen.add(item)
        
        # Check columns
        for i in range(9):
            seen = set()
            for j in range(9):
                item = board[j][i]
                if item != '.' and item in seen:
                    return False
                seen.add(item)
        
        # Check 3x3 boxes
        starts = [(0, 0), (0, 3), (0, 6),
                (3, 0), (3, 3), (3, 6),
                (6, 0), (6, 3), (6, 6)]
        
        for start_row, start_col in starts:
            seen = set()
            for row in range(start_row, start_row + 3):
                for col in range(start_col, start_col + 3):
                    item = board[row][col]
                    if item != '.' and item in seen:
                        return False
                    seen.add(item)
        
        return True
