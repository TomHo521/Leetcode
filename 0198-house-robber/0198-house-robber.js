/**
 * @param {number[]} nums
 * @return {number}
 */

 /**** SELF NOTES
 This is the first problem on leetcode I solved ACCIDENTALLY and did not understand why it works.

 This solution ultimately works because of two things.
 1.  It hits upon all possible choices, and 
 2.  the ordering of the robberies dont matter.

 taking a look at the solution, we can see the overlapping subproblems.  Thus from there it doesnt matter
 the ordering.  

 In this case, the rightSide search will eventually hit upon all possible solutions, starting from picking the proper right sided solution first.

 I still think it suggests something about the problem itself, which is that there is no solution which requires 
 a selection from the center of the house arrays first, that is not covered from a left to right search.

 
 *****/


var rob = function(nums) {

    var robDP = _.memoize( (start, end) => {

        if (start === end) {
            return nums[start];
        }

        if (start === nums.length - 1) {
            return nums[nums.length - 1];
        }

        if (start > end) {
            console.log(`error, start > end -- start: ${start} , end: ${end}`);
            return 0;
        }

        if (end > nums.length) {
            console.log(`end exceeds length -- start: ${start} , end: ${end}`);
            return 0;
        }

        if (start < 0) {
            console.log(`start preceeds array -- start: ${start} , end: ${end}`);
            return 0;
        }

    let maxRobbableProceeds = 0;
    for (var i = start; i < end; i++) {
        //get the robbable houses on the right side.
        let rightStart = i + 2, rightEnd = nums.length, rightRobberyProceeds = 0;

        if (rightStart <= rightEnd - 1) {
            rightRobberyProceeds = robDP(rightStart, rightEnd);
        } 

        let totalProceeds = nums[i] + rightRobberyProceeds;

        maxRobbableProceeds = Math.max(maxRobbableProceeds, totalProceeds);
    }

    return maxRobbableProceeds;
});
    return robDP(0, nums.length);
};