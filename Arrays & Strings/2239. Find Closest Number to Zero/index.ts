function findClosestNumber(nums: number[]): number {
    let min: number = Infinity;

    for (let num of nums) {
        if (Math.abs(num) < Math.abs(min)) {
            min = num;
        }
    }

    return nums.includes(Math.abs(min)) ? Math.abs(min) : min;
};