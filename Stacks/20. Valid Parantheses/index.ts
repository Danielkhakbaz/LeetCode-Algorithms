function isValid(s: string): boolean {
    const hash = { '(': ')', '{': '}', '[': ']' };
    let stack = [];

    if (s.length % 2 !== 0) {
        return false;
    }

    for (let ch of s) {
        if (ch in hash) {
            stack.push(ch);
        } else {
            if (hash[stack.pop()] !== ch) {
                return false;
            }
        }
    }

    return true ? stack.length === 0 : false;
};