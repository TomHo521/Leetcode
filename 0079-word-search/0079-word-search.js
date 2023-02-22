/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var validCoord = function(m, n, board, visited) {
    //console.log(`testing coordinates: m:${m} n:${n}`);
    return (m < board.length) && (m >= 0) && (n < board[0].length) && (n >= 0) && (!visited[m][n]);
}

var DFS = function(mCoord, nCoord, visited, board, word) {

    //console.log('word: ', word);

    if (word.length === 0) {
        return false;
    }

    if (word[0] !== board[mCoord][nCoord]) {
        return false;
    }
    
    if (word.length === 1 && (board[mCoord][nCoord] === word[0])) {
        return true;
    }

    visited[mCoord][nCoord] = true;

    //console.log('visited: ', visited);


    let m = [0, 0, 1, -1];
    let n = [1, -1, 0, 0];

    
    let res = false;
     
    for (var x = 0; x < m.length; x++) {
        let tempM = mCoord + m[x];
        let tempN = nCoord + n[x];
        //console.log(`valid coordinates found at m: ${tempM} n: ${tempN} board:${board[tempM][tempN]}`);


        if (validCoord(tempM, tempN, board, visited)) {
 
            
            let tempChar = word.shift();
            res = res || DFS(tempM, tempN, visited, board, word);
            word.unshift(tempChar);

        }

        if (res) {
            return true;
        }
    }

    visited[mCoord][nCoord] = false;

    return res;

}

var resetVisited = function(visited, board) {
    for (var m = 0; m < board.length; m++) {
        for (var n = 0; n < board[0].length; n++) {
            visited[m][n] = false;
        }
    }
    return visited;
}

var exist = function(board, word) {

    var visited = [];
    for (var m = 0; m < board.length; m++) {
        let next = new Array(board[0].length).fill(false);
        visited.push(next);
    }

    //console.log(visited);
    let dictionary = {};


    //convert word to array.
    let wordParsed = word.split('');

    for (var m = 0; m < board.length; m++) {
        for (var n = 0; n < board[0].length; n++) {
            let char = board[m][n];
            if (char in dictionary) {
                //push the coordinate;
                dictionary[char].push([m,n]);
            } else {
                dictionary[char] = [[m,n]];
            }
        }
    }

    //console.log(dictionary);

    //once we build the basic dictionary, we begin the parse the word.
    if (wordParsed[0] in dictionary) {
        let firstLetterArray = dictionary[word[0]];

        //console.log('got array: ', firstLetterArray);
        for (var k = 0; k < firstLetterArray.length; k++) {
            let m = firstLetterArray[k][0];
            let n = firstLetterArray[k][1];
            //console.log(`testing DFS at m:${m}, n:${n}`);
            if (DFS(m, n, visited, board, wordParsed)) {
                return true;
            } else {
                //console.log(`DFS at m:${m}, n:${n} didnt work`);
                //resetVisited(visited, board);
                //console.log('visited now reset: ', visited);
            }

            

            
        }
    }

    return false;    
};