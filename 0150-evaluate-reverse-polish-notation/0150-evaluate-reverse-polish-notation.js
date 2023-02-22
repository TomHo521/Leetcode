/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    let comp = [];

    while (tokens.length > 0) {

        let next = tokens.shift();

        let num = parseInt(next);


        if (num || num === 0) {
            comp.push(num);
        } else {
            let right = comp.pop();
            let left = comp.pop();

            if (next === "+") {
                comp.push(left + right);
            }
            if (next === "-") {
                comp.push(left - right);
            }
            if (next === "*") {
                comp.push(left * right);
            }
            if (next === "/") {
                //console.log(comp);
                let res = (left / right);
                //console.log(`${left} / ${right} = ${res}`);
                comp.push(Math.trunc(res));
            }
        }
    }


    return comp[0];
    
};