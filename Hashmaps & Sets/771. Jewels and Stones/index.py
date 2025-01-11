class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        count = 0

        new_set = set(jewels)

        for stone in stones:
            if (stone in new_set):
                count += 1

        return count