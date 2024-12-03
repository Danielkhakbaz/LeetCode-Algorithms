/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var longestOnes = function(nums, k) {
    let left = 0;
    let countZero = 0;
    let maxLength = -Infinity;

    for (let i=0; i<nums.length; i++) {
        if (nums[i] === 0) {
            countZero++;
        }

        while (countZero > k) {
            if (nums[left] === 0) {
                countZero--;
            }

            left++;
        }

        maxLength = Math.max(maxLength, i - left + 1);
    }

    return maxLength;
};