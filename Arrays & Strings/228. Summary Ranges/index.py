class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        result = []
        i = 0

        while i < len(nums):
            startingPoint = nums[i]

            while i + 1 < len(nums) and nums[i] + 1 == nums[i + 1]:
                i += 1

            if startingPoint != nums[i]:
                result.append(f"{startingPoint}->{nums[i]}")
            else:
                result.append(f"{nums[i]}")

            i += 1

        return result