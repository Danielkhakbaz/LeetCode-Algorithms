function majorityElement(nums: number[]): number {
    let majority: number = 0;
    let count: number = 0;

    for (let num of nums) {
        if (count === 0) {
            majority = num;
        }

        count += (majority !== num) ? -1 : 1;
    }

    return majority;
};