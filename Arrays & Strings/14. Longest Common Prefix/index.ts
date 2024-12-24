function longestCommonPrefix(strs: string[]): string {
    let prefix: string = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
        }
    }

    return prefix;
};