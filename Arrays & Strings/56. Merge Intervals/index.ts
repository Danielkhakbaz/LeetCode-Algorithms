function merge(intervals: number[][]): number[][] {
    const merged: number[][] = [];

    intervals.sort((a, b) => a[0] - b[0]);

    for (let interval of intervals) {
        if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
            merged.push(interval);
        } else {
            let poped: number[] = merged.pop();

            merged.push([poped[0], Math.max(poped[1], interval[1])]);
        }
    }

    return merged;
};