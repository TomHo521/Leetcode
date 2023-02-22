/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var BST = function(n,isBadVersion) {

    let mid = Math.round(n/2);
    let location = 0;
    let found = false;

    while (!found && mid > 1) {

        // console.log('current value of mid: ${mid}, location: ${location}');
        if (!isBadVersion(location + mid)) {
            // first bad is in upper half
            location += mid;
        }
        mid = Math.round(mid / 2);
    }

    // console.log(`isBadVersion at 1 before: ${isBadVersion(location + mid - 1)}`);
    // console.log(`isBadVersion at location + mid: ${isBadVersion(location + mid)}`);
    // console.log(`isBadVersion at 1 after: ${isBadVersion(location + mid + 1)}`);

    if (isBadVersion(location + mid)) {
        //console.log('is bad at ', location + mid);
        return location + mid;
    } else {
        
        //console.log('is bad at +1 ', location + mid + 1);
        return location + mid + 1;
    }
    




}


/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        return BST(n, isBadVersion);        
    };
};