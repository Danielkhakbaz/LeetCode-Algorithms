/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function(tokens) {
    const stack = [];

    for (let i=0; i<tokens.length; i++) {
        if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") {
            let b = stack.pop();
            let a = stack.pop();

            switch(tokens[i]) {
                case "+": {
                    stack.push(parseInt(a) + parseInt(b));

                    break;
                };
                case "-": {
                    stack.push(a - b);

                    break;
                };
                case "*": {
                    stack.push(a * b);

                    break;
                };
                case "/": {
                    let division = a / b;

                    stack.push(division < 0 ? Math.ceil(division) : Math.floor(division));

                    break;
                };
            }
        } else {
            stack.push(tokens[i]);
        }
    }

    return parseInt(stack[0]);
};