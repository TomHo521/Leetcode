/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {

    let colTitle = [];


    while (columnNumber > 26) {

        let val = columnNumber % 26;

        if (val === 0) {
            colTitle.unshift(26);
        } else {
            colTitle.unshift(columnNumber % 26);
        }
        
        if (colTitle[0] === 26) {
            columnNumber = Math.floor(columnNumber / 26) - 1;
        } else {
            columnNumber = Math.floor(columnNumber / 26);
        }
        
    }

    colTitle.unshift(columnNumber);
    //console.log(colTitle);

    return colTitle.map(e => String.fromCharCode(e + 64)).join('')

    //return String.fromCharCode(columnNumber + 64);
    
};