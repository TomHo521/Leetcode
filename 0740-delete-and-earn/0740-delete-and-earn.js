/**
 * @param {number[]} nums
 * @return {number}
 */

//old solution:
// var removeItem = function(nums, value) {
//     return nums.filter(e => {
//         return !(e === (value + 1) || e === (value - 1))
//     });
// }

  // var recurrenceRelation = function(nums) {
    //     if (!nums || nums.length === 0) {
    //         return 0;
    //     }
        
    //     if (nums.length === 1) {
    //         return nums[0];
    //     }
        
    //     let finalScore = 0;
    //     for (var j = 0; j < nums.length; j++) {
    //         //selecting an option.
    //         let newArray = nums.slice(0,j)
    //                            .concat(nums.slice(j+1));
    //         newArray = removeItem(newArray, nums[j]);
            
    //         let newScore = nums[j] + recurrenceRelation(newArray);
    //         finalScore = Math.max(finalScore, newScore);
    //     }
        
    //     //console.log('finalScore ex: ', finalScore);
    //     return finalScore;
    // }
    
    // let res = recurrenceRelation(nums);
    // return res;
    
//bugs from delete and earn.
//if you have !value and send it i zero it will fail.
//sorting sorts '10' by default as less than 2

var deleteAndEarn = function(nums) {

    nums.sort((a,b)=> a-b);

    var dp = _.memoize((numsIndex) => {

        if (numsIndex === -1) {
            return 0;
        }

        if (numsIndex === 0) {
            return nums[0];
        }
        let sum = 0;
        let val = nums[numsIndex];
        let i = numsIndex;
        
        while (nums[i] === val) {
            sum += val;
            i--;
            if (i < 0) {
                return sum;
            }
        }
        
        let j = i;
        while (nums[j] === val - 1 && j >= 0) {
            j--;
        }

        return Math.max(sum + dp(j), dp(i));
    });

    return dp(nums.length - 1);
};