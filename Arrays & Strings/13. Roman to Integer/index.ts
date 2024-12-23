function romanToInt(s: string): number {
    const obj: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let sum: number = 0;

    for (let i=1; i<=s.length; i++) {
        if (obj[s[i - 1]] < obj[s[i]]) {
            sum += obj[s[i]] - obj[s[i - 1]];

            i++;
        } else {
            sum += obj[s[i - 1]];
        }
    }

    return sum;
};