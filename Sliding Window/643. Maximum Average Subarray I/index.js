/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function(nums, k) {
    let sum = 0;
    let n = nums.length;

    for (let i=0; i<k; i++) {
        sum += nums[i];
    }

    let average = sum / k;

    for (let i=k; i<n; i++) {
        sum += nums[i];
        sum -= nums[i - k];

        current_average = sum / k;

        average = Math.max(average, current_average);
    }

    return average;
};