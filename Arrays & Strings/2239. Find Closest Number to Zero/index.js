/**
 * @param {number[]} nums
 * @return {number}
 */

var findClosestNumber = function(nums) {
    // (1)
    // let min = nums[0];

    // for (let x of nums) {
    //     if (Math.abs(x) < Math.abs(min)) {
    //         min = x;
    //     }
    // }

    // if (min < 0 && nums.includes(Math.abs(min))) {
    //     return Math.abs(min);
    // }

    // return min;

    // (2)
    // const sortedNums = nums.sort((a, b) => Math.abs(a) - Math.abs(b));

    // if (sortedNums.includes(Math.abs(sortedNums[0]))) {
    //     return Math.abs(sortedNums[0]);
    // }

    // return sortedNums[0];

    // Time Complexity: O(N log(n))

    // (3)
    let min = nums[0];

    for (let i=1; i<=nums.length-1; i++) {
        if (Math.abs(min) > Math.abs(nums[i])) {
            min = nums[i];
        }
    }

    if (nums.includes(Math.abs(min))) {
        return Math.abs(min);
    }

    return min;
};