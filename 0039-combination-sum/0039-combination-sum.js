/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */




var combinationSum = function(candidates, target) {

    let solutions = {};
    
    var backtracking = (candidates, target, path) => {

        if (target < 0) {
            return false;
        }

        if (target === 0) {
            //turn object into array.
            // let key = Object.keys(path).sort()
            //                    .map(e => e.toString() + ':' + path[e].toString())
            //                    .join(',');        
            let key = JSON.stringify(path);
            if (!(key in solutions)) {
                solutions[key] = 1;
            }
            return true;
        }

        candidates.forEach(e => {
            (e in path)? path[e]++ : path[e] = 1;
            backtracking(candidates, target - e, path);
            (path[e] - 1 === 0) ? delete path[e] : path[e]--;
        });
    }

    backtracking(candidates, target, {});
    //console.log(solutions);

    return Object.keys(solutions).map(e => {
        let temp = JSON.parse(e);
        let arr = [];
        for (let x in temp) {
            for (let i = 0; i < temp[x]; i++) {
                arr.push(x);
            }
        }
        return arr;
    })
    // return Object.keys(solutions).map(e => {
    //     let arr = [];
    //     e.split(',').forEach(ele => 

    //         {
    //             //console.log(`ele: ${ele}`);
    //             let delimeter = ele.indexOf(':');
    //             //console.log(`del: ${delimeter}`);
    //             let num = ele.slice(0,delimeter);
    //             //console.log(`num: ${num}`);
    //             let coefficient = ele.slice(delimeter + 1);
    //             //console.log(`c: ${coefficient}`);
    //             for (var i = 0; i < coefficient; i++) {
    //                 arr.push(num);
    //             }
    //         }
    //     );
    //     //console.log(arr);
    //     return arr;
    // });

   
};