/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {
    const obj = {};

    for (let item of magazine) {
        obj[item] = (obj[item] || 0) + 1;
    }
    
    for (let ch of ransomNote) {
        if (obj[ch]) {
            obj[ch]--;
        } else {
            return false;
        }
    }

    return true;
};