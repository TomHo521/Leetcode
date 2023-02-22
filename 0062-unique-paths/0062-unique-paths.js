/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var memoizeFunction = (func) => {
    let cache = {};

    return (...n) => {
        let key = n[0].toString() + 'x' + n[1].toString();
        
        if (key in cache) {
            return cache[key]; 
        }

        cache[key] = func(...n);
        return cache[key];
    }

}

var inBounds = function(m, n, grid_m, grid_n) {
    return (n >= 0) && (m >= 0) && (n <= grid_n) && (m <= grid_m);
}

var uniquePathWithStart = (start_m, start_n, m, n) => {
    if ((start_m === m) && (start_n === n)) {
        return 1;
    }
    let total = 0;
    if (start_m + 1 <= m) {
        //console.log(`starting coords: ${start_m + 1}, ${start_n} total: ${total}`);
        total += uniquePathWithStart(start_m + 1, start_n, m, n);   
    }
    if (start_n + 1 <= n) {
        total += uniquePathWithStart(start_m, start_n + 1, m, n);
        //console.log(`starting coords: ${start_m}, ${start_n+1} total: ${total}`);
    }
    return total;
}

var uniquePaths = function(m, n) {
    let pathDP = memoizeFunction((start_m, start_n, m, n) => {

        if ((start_m === m) && (start_n === n)) { return 1; }
        let total = 0;
        if (start_m + 1 <= m) { total += pathDP(start_m + 1, start_n, m, n);  }
        if (start_n + 1 <= n) { total += pathDP(start_m, start_n + 1, m, n);  }
        return total;

    });


    return pathDP(0,0,m - 1,n - 1);
};