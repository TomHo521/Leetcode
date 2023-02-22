/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */

var getNextJob = function (jobs, index) {

    // let left = index;
    // let right = jobs.length - 1;

    // while (left < right) {
    //     let mid = (right - left )/2;
    //     mid = Math.floor(mid);

    //     if (jobs[index].start === jobs[mid].start) {

    //     }
    // }

    if (index === jobs.length - 1) {
        return -1;
    }

    for (var i = index + 1; i < jobs.length; i++) {
        if (jobs[i].start >= jobs[index].end) {
            return i;
        }
    }

    return -1;
}

var jobScheduling = function(startTime, endTime, profit) {

    
    let jobs = startTime.map((s,i) => {
        return {start: s, end: endTime[i], profit: profit[i]}
        });
    jobs.sort((a,b) => a.start - b.start);

    //console.log('jobs:', jobs);

    let dpCache = new Array(jobs.length).fill(-1);

    for (var i = jobs.length - 1; i >= 0; i--) {

        //console.log('state of cache: ', dpCache);
        let nextJob = getNextJob(jobs, i);

        if (nextJob === -1) {
            var currentValue = jobs[i].profit;
        } else {
            var currentValue = jobs[i].profit + dpCache[nextJob];
        }

        if (i === jobs.length - 1) {
            dpCache[i] = currentValue;
        } else {
            dpCache[i] = Math.max(currentValue, dpCache[i+1])
        }
       

    }
    
    return dpCache[0];

}

// var removeOverlapping = function(jobIndex, jobs) {
//     let start = jobs[jobIndex][0];
//     let end = jobs[jobIndex][1];

//     let res = jobs.filter((e,i) => {
//         //console.log(`testing e.start ${e[0]} e.end ${e[1]} vs start ${start} & end ${end}`);
//         let condition =  (e[0] >= start && e[0] < end) || (e[1] > start && e[1] < end) ||
//                          (start >= e[0] && start < e[1]) || (end > e[0] && end < e[1]);
//         return !condition && (jobIndex !== i);
        
//     });

//     return res || [];
// }

// // var skipObj = function(jobIndex, jobs) {
// //     let start = jobs[jobIndex][0];
// //     let end = jobs[jobIndex][1];

// //     let skipObject = {};

// //     for (var i = 0; i < jobs.length; i++) {
// //         let e = jobs[i];
// //         let condition =  (e[0] >= start && e[0] < end) || (e[1] > start && e[1] < end) ||
// //                     (start >= e[0] && start < e[1]) || (end > e[0] && end < e[1]);
// //         if (condition) {
// //             skipObject[i] = 1;
// //         }
// //     }

// //     skipObject[jobIndex] = 1;

// //     return skipObject;
// // }



// var jobScheduling = function(startTime, endTime, profit) {

//     let jobs = startTime.map((s,i) => [s, endTime[i], profit[i]]);
//     // console.log(jobs);
//     // console.log('test: removing job 0');
//     // console.log(removeOverlapping(0, jobs));
//     // console.log('test: removing job 1');
//     // console.log(removeOverlapping(1, jobs));
//     // console.log('test: removing job 2: ', jobs[2] );
//     // console.log(removeOverlapping(2, jobs));


    

//     var dpGetMax = _.memoize((jobs, skipObjectList) => {

//         if (jobs.length === 0) {
//             return 0;
//         }

//         if (jobs.length === 1) {
//             return jobs[0][2];
//         }

//         let maxProfit = 0;
//         for (var i = 0; i < jobs.length; i++) {
//             // if (i in skipObjectList) {
//             //     continue;
//             // }

//             //let newSkipList = skipObject(i, jobs);
//             let filteredJobList = removeOverlapping(i, jobs);


//             //console.log(`newJobList: ${filteredJobList}`)
//             let profitAfterChoice = dpGetMax(filteredJobList)
//             //console.log(`testing job:${i} addl profit: ${jobs[i][2]} pafterAchoice ${profitAfterChoice}`);

//             let profitFromChoice = jobs[i][2] + profitAfterChoice;
//             //console.log(`profit from job:${i} profit: ${jobs[i][2]}`);
//             maxProfit = Math.max(maxProfit, profitFromChoice);
//             //console.log(`maxprofit ${maxProfit}, profitFromChoice ${profitFromChoice}`);
//         }

//         return maxProfit;

//     });

//     return dpGetMax(jobs, {});
// };