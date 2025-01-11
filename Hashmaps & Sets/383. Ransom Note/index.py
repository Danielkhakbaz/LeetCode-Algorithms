class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        hash = Counter(magazine)

        for ch in ransomNote:
            if (hash[ch]):
                hash[ch] -= 1
            else:
                return False

        return True