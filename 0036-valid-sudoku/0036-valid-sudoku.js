/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    var checkList = {};
    
    // validate the 9 rows
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            if (board[i][j] !== '.') {
                if (checkList[board[i][j]]) {
                    // double number;
                    console.log(`flagged at i: ${i}, j: ${j}`);
                    return false;
                }
                checkList[board[i][j]] = true;
            }
        }
        checkList = {};
    }
    
    //console.log('rows validated');
    
    // validate the 9 columns
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            if (board[j][i] !== '.') {
                if (checkList[board[j][i]]) {
                    // double number;
                    console.log(`flagged at i: ${i}, j: ${j}`);
                    return false;
                }
                checkList[board[j][i]] = true;
            }
        }
        checkList = {};
    }
    
    //console.log('columns validated');
    checkList = {};
    
    // validate by box
    
    for (var i = 0; i < 9; i+=3) {
        for (var j = 0; j < 9; j+=3) {
            
            for (var counter = 0; counter < 3; counter++) {
                for (var counter2 = 0; counter2 < 3; counter2++) {
                    
                    let x = i + counter;
                    let y = j + counter2;
                    
                    if (board[x][y] !== '.') {
                        if (checkList[board[x][y]]) {
                            // double number;
                            console.log(`flagged at x: ${x}, y: ${y}`);
                            return false;
                        }
                        checkList[board[x][y]] = true;
                    }
                }       
            }
            
            checkList = {};
            
        }
    }
    
    //console.log('boxes validated');
    return true;
    
};