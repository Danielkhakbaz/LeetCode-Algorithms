function search(nums: number[], target: number): number {
    let left: number = 0, right: number = nums.length - 1;

    while (left <= right) {
        let mid: number = Math.floor((left + right) / 2);

        if (target === nums[mid]) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        }
    }

    return -1;
};