class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        hash = {}

        for ch in s:
            hash[ch] = hash.get(ch, 0) + 1

        for ch in t:
            if ch in hash and hash[ch]:
                hash[ch] -= 1
            else:
                return False

        for ch in hash:
            if hash[ch] != 0:
                return False

        return True