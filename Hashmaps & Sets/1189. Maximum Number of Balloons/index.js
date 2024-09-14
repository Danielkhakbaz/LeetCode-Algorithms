/**
 * @param {string} text
 * @return {number}
 */

var maxNumberOfBalloons = function(text) {
    let hash = {};

    let balloon = "balloon";

    for (let ch of text) {
        if (balloon.includes(ch)) {
            hash[ch] = (hash[ch] || 0) + 1;
        }
    }

    hash["l"] = Math.floor(hash["l"] / 2);
    hash["o"] = Math.floor(hash["o"] / 2);

    for (let ch of balloon) {
        if (!hash[ch]) {
            return 0;
        }
    }

    return Math.min(...Object.values(hash));
};