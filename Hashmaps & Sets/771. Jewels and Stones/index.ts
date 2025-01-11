function numJewelsInStones(jewels: string, stones: string): number {
    let count: number = 0;

    const set = new Set(jewels);

    for (let stone of stones) {
        if (set.has(stone)) {
            count++;
        }
    }

    return count;
};