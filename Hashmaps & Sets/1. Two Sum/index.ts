function twoSum(nums: number[], target: number): number[] {
    let hash = {};

    for (let key in nums) {
        hash[nums[key]] = key;
    }

    for (let i=0; i<nums.length; i++) {
        if (hash[target - nums[i]] && parseInt(hash[target - nums[i]]) !== i) {
            return [i, parseInt(hash[target - nums[i]])];
        }
    }
};