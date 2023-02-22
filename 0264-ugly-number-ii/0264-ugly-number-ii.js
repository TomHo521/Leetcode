/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {

    let uglyNumArray = [1]
    let twoCount = 0, threeCount = 0, fiveCount = 0;
    while (uglyNumArray.length < n) {
        //console.log(uglyNumArray);

        let latestUglyNum = uglyNumArray[uglyNumArray.length - 1]
        while (2 * uglyNumArray[twoCount] <= latestUglyNum) {
            twoCount++;
        }

        while (3 * uglyNumArray[threeCount] <= latestUglyNum) {
            threeCount++;
        }

        while (5 * uglyNumArray[fiveCount] <= latestUglyNum) {
            fiveCount++;
        }


        let nextN = Math.min(2 * uglyNumArray[twoCount], 3 * uglyNumArray[threeCount], 5 * uglyNumArray[fiveCount]);
        uglyNumArray.push(nextN);
    }

    return uglyNumArray[n-1];


};