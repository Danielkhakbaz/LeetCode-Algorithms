class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        sett = set(nums)

        return True if len(nums) != len(sett) else False