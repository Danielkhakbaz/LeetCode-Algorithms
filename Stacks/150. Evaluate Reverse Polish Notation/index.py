class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        array = []

        for token in tokens:
            if token == "+" or token == "-" or token == "*" or token == "/":
                a = int(array.pop())
                b = int(array.pop())

                if token == "+":
                    array.append(a + b)
                elif token == "-":
                    array.append(b - a)
                elif token == "*":
                    array.append(a * b)
                elif token == "/":
                    array.append(b / a)
            else:
                array.append(token)

        return int(array[0])