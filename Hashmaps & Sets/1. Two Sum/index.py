class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash = {}

        for key in range(len(nums)):
            hash[nums[key]] = key

        for i in range(len(nums)):
            x = target - nums[i]

            if x in hash and hash[x] != i:
                return [i, hash[x]]