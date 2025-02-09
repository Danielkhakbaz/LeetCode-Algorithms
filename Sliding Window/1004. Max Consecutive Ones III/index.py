class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = 0
        countZero = 0
        maxLength = float("-inf")

        for i in range(len(nums)):
            if nums[i] == 0:
                countZero += 1

            while countZero > k:
                if nums[left] == 0:
                    countZero -= 1

                left += 1

            maxLength = max(maxLength, i - left + 1)

        return maxLength