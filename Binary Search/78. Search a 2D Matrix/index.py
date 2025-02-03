class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        column = len(matrix)
        row = len(matrix[0])

        left = 0
        right = row * column - 1
        
        while left <= right:
            mid = math.floor((left + right) / 2)

            i = math.floor(mid / row)
            j = mid % row

            midNumber = matrix[i][j]

            if target == midNumber:
                return True
            elif target > midNumber:
                left = mid + 1
            else:
                right = mid - 1
            
        return False