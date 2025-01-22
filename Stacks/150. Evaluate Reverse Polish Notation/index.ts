function evalRPN(tokens: string[]): number {
    const array: any[] = [];

    for (let token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            let a = parseInt(array.pop());
            let b = parseInt(array.pop());

            if (token === "+") {
                array.push(a + b);
            } else if (token === "-") {
                array.push(b - a);
            } else if (token === "*") {
                array.push(a * b);
            } else if (token === "/") {   
                array.push(b / a);
            }
        } else {
            array.push(token);
        }
    }

    return parseInt(array[0]);
};