class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        left = 1
        right = num // 2 or 1

        while left <= right:
            mid = (left + right) // 2

            if mid * mid == num:
                return True
            elif mid * mid > num:
                right = mid - 1
            else:
                left = mid + 1

        return False