class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        left = 0
        right = len(nums) - 1

        numbers = []

        while left <= right:
            if abs(nums[left]) < abs(nums[right]):
                numbers.append(nums[right] * nums[right])
                right -= 1
            else:
                numbers.append(nums[left] * nums[left])
                left += 1

        return numbers[::-1]