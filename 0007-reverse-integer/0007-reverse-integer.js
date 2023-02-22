/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    var str = x.toString();
    var digits = str.split('');
    digits = digits.reverse();
    
    // 2,147,483,647
    var negative = false;
    
    if (digits[digits.length - 1] === '-') {
        negative = true;
        digits.pop();
    }
    
    if (digits.length > 10) {
        return 0;
    }
            
    let newX = parseInt(digits.join(''), 10);
    
    if (negative){
        newX *= -1;
    }
        
    if ((newX > 2147483647) || (newX < -2147483647)) {
        return 0;
    }
        
    return newX;
 
};