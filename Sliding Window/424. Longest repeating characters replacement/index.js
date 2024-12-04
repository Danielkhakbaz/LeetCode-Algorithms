/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function(s, k) {
    let array = new Array(26).fill(0);
    let maxLength = 0;
    let maxCount = 0;
    let counter = 0;
    let left = 0;

    for (let right=0; right<s.length; right++) {
        let index = s[right].charCodeAt() - "A".charCodeAt();
        array[index]++;
        maxCount = Math.max(maxCount, array[index]);

        if ((right - left + 1) - maxCount > k) {
            let index = s[left].charCodeAt() - "A".charCodeAt();
            array[index]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};