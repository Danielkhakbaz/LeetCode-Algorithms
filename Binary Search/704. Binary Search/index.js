/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // const map = new Map();

    // for (let i in nums) {
    //     map.set(nums[i], i);
    // }
    
    // return map.has(target) ? parseInt(map.get(target)) : -1;

    // Time Complexity: O(n)

    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((right + left) / 2);

        if (target === nums[middle]) {
            return middle;
        } else if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        }
    }

    return -1;

    // Time Complexity: O(n log(n))
};