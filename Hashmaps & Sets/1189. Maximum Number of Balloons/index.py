class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        balloon = "balloon"

        hash = {}

        for ch in text:
            if ch in balloon:
                hash[ch] = hash.get(ch, 0) + 1
        
        if "l" in hash:
            hash["l"] = hash["l"] // 2
        if "o" in hash:
            hash["o"] = hash["o"] // 2

        for ch in balloon:
            if ch not in hash:
                return 0

        print(hash)

        return min(hash.values())