/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for (let i=0; i<nums.length - 1; i++) {
        for (let j= i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }    

    // let hash = {};

    // for (let key in nums) {
    //     hash[nums[key]] = key;
    // }

    // for (let i=0; i<nums.length; i++) {
    //     if (hash[target - nums[i]] && hash[target - nums[i]] !== i) {
    //         return [i, hash[target - nums[i]]];
    //     }
    // }
};