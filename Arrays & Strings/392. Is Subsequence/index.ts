function isSubsequence(s: string, t: string): boolean {
    let i: number = 0;

    if (s === "") {
        return true;
    }

    for (let j = 0; j < t.length; j++) {
        if (s[i] === t[j]) {
            i++;

            if (i === s.length - 1) {
                return true;
            }
        }
    }

    return false;
};