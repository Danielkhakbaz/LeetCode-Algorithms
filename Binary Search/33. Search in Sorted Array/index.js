/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    // return nums.indexOf(target);
    // Time Complexity O(n)

    // Find the Minimum
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    let min = left;

    if (min === 0) {
        left = 0;
        right = nums.length - 1;
    } else if (target >= nums[0] && target <= nums[min - 1]) {
        left = 0;
        right = min - 1;
    } else {
        left = min;
        right = nums.length - 1;
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};