/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    // (1)
    //   const setNums = new Set(nums);

    //   return true ? nums.length !== setNums.size : false;

    // (2)
    const set = new Set(nums);

    return set.size === nums.length ? false : true;
};