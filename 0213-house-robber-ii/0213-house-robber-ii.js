/**
 * @param {number[]} nums
 * @return {number}
 */



var rob = function(nums) {

    
    var dp = _.memoize((stend) => {

        let st = '', end = '';
        for (var i = 0; 'x' !== stend[i]; i++) {
            st += stend[i]
        }

        for (var j = i + 1; j < stend.length; j++) {
            end += stend[j]
        }


        st = parseInt(st);
        end = parseInt(end);
        
        //console.log(`dp called -- start: ${st} end: ${end}`);

        if (end < 0) {
            return 0;
        }

        if (end - st < 0) {
            return 0;
        }

        if (end - st === 0 ) {
            return nums[end];
        }

        if (end === nums.length - 1) {

            //console.log(`first case: start ${st} end: ${end}`);

            let o1 = st.toString()+'x'+(end - 1).toString();
            let o2 = (st + 1).toString()+'x'+(end - 2).toString();

            let notEndHousePicked = dp(o1);
            //where the house is the very end
            let endHousePicked = dp(o2) + nums[end];

           

            // console.log(`not picked dp(${st}, ${end - 1}): ${notEndHousePicked}`);
            // console.log(`end picked dp(${st + 1}, ${end - 2}): ${endHousePicked}`);
            // console.log('------')

            return Math.max(endHousePicked, notEndHousePicked);
        }

            let o1 = st.toString()+'x'+(end - 1).toString();
            let o2 = st.toString()+'x'+(end - 2).toString();

        // where you dont pick the non-end house.
        let notEndHousePicked = dp(o1);

        //where the house is the very end
        let endHousePicked = dp(o2) + nums[end];

        // console.log('------');
        // console.log(`NOT first case: start ${st} end: ${end}`);
        // console.log(`not picked dp(${st}, ${end - 1}): ${notEndHousePicked}`);
        // console.log(`end picked dp(${st + 1}, ${end - 2}): ${endHousePicked}`);
        // console.log('------');
        // console.log(`for dp(${st}, ${end}) MAX(${notEndHousePicked},${endHousePicked})`);
        return Math.max(notEndHousePicked, endHousePicked);



        //return Math.max(endHousePicked, notEndHousePicked);
    });


    //console.log('dp of one:one: ', dp(1, -1));
    //console.log('0'+'x'+(nums.length - 1).toString());
    return dp('0'+'x'+(nums.length - 1).toString());

    
};