function groupAnagrams(strs: string[]): string[][] {
    let hash = {};

    for (let str of strs) {
        let array = new Array(26).fill(0);

        for (let ch of str) {
            array[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
        }

        let key = array.join(",");

        if (hash[key]) {
            hash[key].push(str);
        } else {
            hash[key] = [str];
        }
    }

    return Array.from(Object.values(hash));
};