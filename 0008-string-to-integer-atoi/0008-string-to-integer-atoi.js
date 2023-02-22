/**
 * @param {string} s
 * @return {number}
 */

// 2^ 32 = 4294967296

var myAtoi = function(s) {

    let res = [];
    let sign = 'x';
    let numbersStarted = false;
    let readingSpaces = true;


    for (var i = 0; i < s.length; i++) {

        if (s[i] === " ") {
            if (!numbersStarted) {
                continue;
            }
            break;
        } else {
            readingSpaces = false;
        }

        if (s[i] === "+" || s[i] === "-") {
            if (!numbersStarted) {
                if (sign !== 'x') {
                    break;
                }
                sign = s[i];
                if (!numbersStarted) {
                    numbersStarted = true;
                }
                continue;
            } 
            break;
        }

        if (s[i] === '0') {
            res.push(0);
            if (!numbersStarted) {
                numbersStarted = true;
            }
            continue;
        }

        if (s[i] === '1') {
            res.push(1);
            if (!numbersStarted) {
                numbersStarted = true;
            }
            continue;
        }

        if (s[i] === '2') {
            res.push(2);
            if (!numbersStarted) {
                numbersStarted = true;
            }
            continue;
        }

        if (s[i] === '3') {
            res.push(3);
            if (!numbersStarted) {
                numbersStarted = true;
            }
            continue;
        }

        if (s[i] === '4') {
            res.push(4);
            if (!numbersStarted) {
                numbersStarted = true;
            }
            continue;
        }

        if (s[i] === '5') {
            res.push(5);
            if (!numbersStarted) {
                numbersStarted = true;
            }
            continue;
        }      

        if (s[i] === '6') {
            res.push(6);
            if (!numbersStarted) {
                numbersStarted = true;
            }
            continue;
        }
        
        if (s[i] === '7') {
            res.push(7);
            if (!numbersStarted) {
                numbersStarted = true;
            }
            continue;
        }
        
        if (s[i] === '8') {
            res.push(8);
            if (!numbersStarted) {
                numbersStarted = true;
            }
            continue;
        }

        if (s[i] === '9') {
            res.push(9);
            if (!numbersStarted) {
                numbersStarted = true;
            }
            continue;
        }

        if (!readingSpaces) { 
            break;
        }

        if (numbersStarted) {
            break;
        }

        

    }  

    //console.log(res);

    if (res.length === 0) {
        return 0;
    }

    let multiplier = 1;
    let acm = 0;

    for (var i = res.length - 1; i >= 0; i--) {
        res[i] *= multiplier;
        acm = acm + res[i];
        multiplier *= 10;
    }  

    if (sign === '-') {
        acm *= -1;
    }

    if (acm > 2147483647) {
        acm = 2147483647;
    }

    if (acm <= -2147483648) {
        acm = -2147483648;
    }


    return acm;

};