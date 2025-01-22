class Solution:
    def calPoints(self, operations: List[str]) -> int:
        array = []

        for opr in operations:
            if opr == "+":
                a = array[len(array) - 1]
                b = array[len(array) - 2]

                array.append(a + b)
            elif opr == "D":
                a = array[len(array) - 1]

                array.append(2 * a)
            elif opr == "C":
                array.pop()
            else:
                array.append(int(opr))

        return sum(array)