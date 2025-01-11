function maxNumberOfBalloons(text: string): number {
    let balloon: string = "balloon";
    let hash = {};

    for (let ch of text) {
        if (balloon.includes(ch)) {
            hash[ch] = (hash[ch] || 0) + 1;
        }
    }

    hash["l"] = Math.floor(hash["l"] / 2);
    hash["o"] = Math.floor(hash["o"] / 2);

    if (Object.keys(hash).length !== 5) {
        return 0;
    }
    
    return Math.min(...Object.values(hash) as number[]);
};