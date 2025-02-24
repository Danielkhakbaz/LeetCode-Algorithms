class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        # (1)
        # balloon = "balloon"

        # hash = {}

        # for ch in text:
        #     if ch in balloon:
        #         hash[ch] = hash.get(ch, 0) + 1
        
        # if "l" in hash:
        #     hash["l"] = hash["l"] // 2
        # if "o" in hash:
        #     hash["o"] = hash["o"] // 2

        # for ch in balloon:
        #     if ch not in hash:
        #         return 0

        # print(hash)

        # return min(hash.values())
    
        allowed_characters = {"b", "a", "l", "o", "n"}
        hash = Counter(ch for ch in text if ch in allowed_characters)

        hash["l"] = hash["l"] // 2
        hash["o"] = hash["o"] // 2

        for ch in allowed_characters:
            if ch not in text:
                return 0

        return min(hash.values())