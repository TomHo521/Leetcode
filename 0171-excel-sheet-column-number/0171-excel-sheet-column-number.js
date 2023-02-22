/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {

    let num = 0;
    let radixDigit = 1;

    for (var i = columnTitle.length - 1; i >=0; i--) {
        //console.log(columnTitle[i].charCodeAt(0)) ;
        num += (columnTitle[i].charCodeAt(0) - 64) * radixDigit;
        radixDigit *= 26;
    }

    return num;
    
    
};