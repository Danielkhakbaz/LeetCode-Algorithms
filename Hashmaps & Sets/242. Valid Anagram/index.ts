function isAnagram(s: string, t: string): boolean {
    let hash = {};

    for (let ch of s) {
        hash[ch] = (hash[ch] || 0) + 1;
    }
    
    for (let ch of t) {
        if (hash[ch]) {
            hash[ch]--;
        } else {
            return false;
        }
    }

    for (let ch in hash) {
        if (hash[ch] !== 0) {
            return false;
        }
    }

    return true;
};