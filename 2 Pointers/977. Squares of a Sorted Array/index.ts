function sortedSquares(nums: number[]): number[] {
    let left: number = 0;
    let right: number = nums.length - 1;

    const numbers: number[] = [];

    while (left <= right) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            numbers.push(nums[right] * nums[right]);

            right--;
        } else {
            numbers.push(nums[left] * nums[left]);

            left++;
        }
    }

    return numbers.reverse();
};