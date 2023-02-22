/**
 * @param {string} s
 * @return {number}
 */

// var getNextNum = (subExpression, start) => {

//     var counter = start;
//     while (subExpression[counter] !== '+' && subExpression[counter] !== '-') {
//         counter++;
//     }
//     return parseInt(subExpression.splice(start, counter));
// }

var evaluate = function(subExpression) {

    let operatorFound = false;
    for (var i = 1; i < subExpression.length; i++) {
        if (subExpression[i] === "+" || subExpression[i] === "-") {
            operatorFound = true;
        }
    }

    if (!operatorFound) {
        if (subExpression[0] === '-') {
            subExpression.shift();
            return subExpression.shift() * -1;
        }
        return subExpression.shift();
    }

    let val;
    if (subExpression[0] === '-') {
        subExpression.shift();
        val = subExpression.shift() * -1;
    } else {
        val = subExpression.shift();
    }
    
    while (subExpression.length > 1) {
        let operator = subExpression.shift();
        let nextNum = subExpression.shift();

        if (operator === '+') {
            val = val + nextNum;
        }

        if (operator === '-') {
            val = val - nextNum;
        }
    }

    return val;
}

 
var calculate = function(s) {

    var stack = [];
    var operators = {
        '+': 'addition',
        '-': 'subtraction',
        '(': 'open paren',
        ')': 'close paren',
    }

    for (var i = 0; i < s.length; i++) {

        if (s[i] !== ' ') {
            if (s[i] === '+' || s[i] === '-' || s[i] === '(' || s[i] === ')' )  {
                stack.push(s[i]);
            } 
            else {
                let numString = s[i];
                while (i + 1 < s.length && !(s[i+1] in operators)) { 
                    numString += s[i+1];
                    i++;
                }
                stack.push(parseInt(numString));
            }
            
        }
        

        if (s[i] === ')') {
            stack.pop(); //to remove the ')'
            let j = stack.length - 1
            while (stack[j] !== '(') {
                j--;
            }
            let subExpression = stack.splice(j+1);
            stack.pop() //to remove the '('
       
            let val = evaluate(subExpression);
            stack.push(val);
        }

    }

    return evaluate(stack);    
};