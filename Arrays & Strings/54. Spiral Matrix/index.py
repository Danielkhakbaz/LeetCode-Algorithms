class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        DIRECTION = "RIGHT"

        UP_WALL = 0
        RIGHT_WALL = len(matrix[0])
        DOWN_WALL = len(matrix)
        LEFT_WALL = -1

        result = []

        row = 0
        column = 0

        while len(result) != len(matrix[0]) * len(matrix):
            if DIRECTION == "RIGHT":
                while column < RIGHT_WALL:
                    result.append(matrix[row][column])

                    column += 1
                
                column -= 1
                row += 1

                RIGHT_WALL -= 1

                DIRECTION = "DOWN"
            elif DIRECTION == "DOWN":
                while row < DOWN_WALL:
                    result.append(matrix[row][column])

                    row += 1

                row -= 1
                column -= 1

                DOWN_WALL -= 1

                DIRECTION = "LEFT"
            elif DIRECTION == "LEFT":
                while column > LEFT_WALL:
                    result.append(matrix[row][column])

                    column -= 1

                row -= 1
                column += 1

                LEFT_WALL += 1

                DIRECTION = "UP"
            elif DIRECTION == "UP":
                while row > UP_WALL:
                    result.append(matrix[row][column])

                    row -= 1

                row += 1
                column += 1

                UP_WALL += 1

                DIRECTION = "RIGHT"

        return result