class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        sum = 0
        average = 0

        for i in range(k):
            sum += nums[i]
        
        average = sum / k

        for i in range(k, len(nums)):
            sum += nums[i]
            sum -= nums[i - k]

            print(sum)

            average = max(sum / k, average)

        return average