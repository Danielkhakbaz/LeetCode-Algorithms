function canConstruct(ransomNote: string, magazine: string): boolean {
    let map: Map<string, number> = new Map();

    for (let ch of magazine) {
        map[ch] = (map[ch] || 0) + 1;
    }

    for (let ch of ransomNote) {
        if (map[ch]) {
            map[ch]--;
        } else {
            return false;
        }
    }

    return true;
};