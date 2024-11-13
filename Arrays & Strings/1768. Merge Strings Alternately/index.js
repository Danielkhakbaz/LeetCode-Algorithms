/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 
var mergeAlternately = function(word1, word2) {
    // const obj = {};

    // for (let i=0; i<word1.length * 2; i+=2) {
    //     obj[i] = word1[i / 2], i;
    // }
    // for (let j=1; j<=word2.length * 2; j+=2) {
    //     obj[j] = word2[(j - 1) / 2], j;
    // }

    // let str = "";

    // for (let x in obj) {
    //     str += obj[x];
    // }

    // return str;

    // (2)
    let str = "";
    let obj = {};

    for (let i=0; i<word1.length; i++) {
        obj[i * 2] = word1[i];
    }

    for (let j=0; j<word2.length; j++) {
        obj[j * 2 + 1] = word2[j];
    }

    for (let item in obj) {
        str += obj[item];
    }

    return str;

};