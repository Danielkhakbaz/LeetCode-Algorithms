function mergeAlternately(word1: string, word2: string): string {
    let obj: {[key: number]: string} = {};
    let str: string = "";

    for (let i = 0; i < word1.length; i++) {
        obj[i * 2] = word1[i];
    }

    for (let i = 0; i < word2.length; i++) {
        obj[i * 2 + 1] = word2[i];
    }

    for (let key in obj) {
        str += obj[key];
    }

    return str;
};