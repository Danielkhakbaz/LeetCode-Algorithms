class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1

        maxV = 0

        while left < right:
            maxV = max((right - left) * min(height[left], height[right]), maxV)

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return maxV