class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min = prices[0]
        profit = 0

        for price in prices:
            if min > price:
                min = price

            if profit < price - min:
                profit = price - min

        return profit        