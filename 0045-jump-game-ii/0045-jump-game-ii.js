/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    var jumpDP =  _.memoize((start) => {
        //base case
        if (start >= nums.length - 1) {
            return 0;
        }

        if (nums[start] === 0) {
            return Infinity;
        }

        let minDistance = Infinity;
        for (var i = 1; i <= nums[start]; i++) {
            //let x = jumpDP(start + i);
            //console.log(`jumpDP: ${x} start:${start} i: ${i} `);
            minDistance = Math.min(minDistance, 1 + jumpDP(start + i));
        }

        return minDistance;
    })

    return jumpDP(0);
};