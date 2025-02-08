class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        def canFinish(k):
            if k == 0:
                return False
                
            hours = 0
            for pile in piles:
                hours += math.ceil(pile / k)
            return hours <= h

        left = 1
        right = max(piles)

        while left < right:
            mid = (left + right) // 2
            
            if canFinish(mid):
                right = mid
            else:
                left = mid + 1

        return left