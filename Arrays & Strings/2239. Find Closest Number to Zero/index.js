/**
 * @param {number[]} nums
 * @return {number}
 */

var findClosestNumber = function(nums) {
    let min = nums[0];

    for (let x of nums) {
        if (Math.abs(x) < Math.abs(min)) {
            min = x;
        }
    }

    if (min < 0 && nums.includes(Math.abs(min))) {
        return Math.abs(min);
    }

    return min;
};