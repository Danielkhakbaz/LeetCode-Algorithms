class Solution:
    def isValid(self, s: str) -> bool:
        hash = { '(': ')', '{': '}', '[': ']' }

        stack = []

        if len(s) % 2 != 0:
            return False

        for ch in s:
            if ch in hash:
                stack.append(ch)
            else:
                if not stack or hash[stack.pop()] != ch:
                    return False

        print(stack)

        return True if len(stack) == 0 else False