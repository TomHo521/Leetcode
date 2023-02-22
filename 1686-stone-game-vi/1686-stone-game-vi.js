/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function(aliceValues, bobValues) {
    let sum = aliceValues.map((e,i) => [e + bobValues[i], i]);

    let aliceScore = 0;
    let bobScore = 0;

    sum.sort((a,b) => b[0]-a[0]);
    let aliceTurn = true;

    for (var i = 0; i < sum.length; i++) {
        if (aliceTurn) {
            aliceScore += aliceValues[sum[i][1]];
        } else {
            bobScore += bobValues[sum[i][1]];
        }
        aliceTurn = !aliceTurn;
    }

    // console.log(sum)
    // console.log(aliceScore);
    // console.log(bobScore);

    if (aliceScore > bobScore) {
        return 1
    }
    if (aliceScore === bobScore) {
        return 0
    }
    
    return -1
};