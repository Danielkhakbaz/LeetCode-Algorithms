class Solution:
    def romanToInt(self, s: str) -> int:
        obj = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }

        sum = 0

        for i in range(len(s)):
            if i < len(s) - 1 and obj[s[i]] < obj[s[i + 1]]:
                sum -= obj[s[i]]
            else:
                sum += obj[s[i]]

        return sum
        