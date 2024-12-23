class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        hash = {}

        for i in range(0, len(word1)):
            hash[i * 2] = word1[i]

        for i in range(0, len(word2)):
            hash[i * 2 + 1] = word2[i]
            
        sorted_keys = sorted(hash.keys(), key=int)
        ordered_values = [hash[key] for key in sorted_keys]

        return "".join(ordered_values)