class Solution:
    def findClosestNumber(self, nums: List[int]) -> int:
        min = inf
        
        for num in nums:
            if abs(num) < abs(min):
                min = num

        return abs(min) if abs(min) in nums else min