/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
  const setNums = new Set(nums);

  return true ? nums.length !== setNums.size : false;
};