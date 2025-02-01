function searchInsert(nums: number[], target: number): number {
    let left: number = 0, right = nums.length - 1;
    let mid: number;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        }
    }

    if (target > nums[mid]) {
        return mid + 1;
    } else {
        return mid;
    }
};