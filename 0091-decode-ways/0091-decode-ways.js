/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

    let decodingDict = {};

    for (var i = 1; i < 27; i++) {
        decodingDict[i] = true;
    }

    
    let dpDecoding = _.memoize((end) => {
        if (end === 0) {
            return 0;
        }

        if (end === 1) {
            if (s[0] in decodingDict) {
                return 1;
            }
            return 0;
        }

        if (end === 2) {
            let temp = s.substring(0,end);
            if (temp in decodingDict) {
                if (temp === "10" || temp === "20") {
                    return 1;
                } 
                return 2;
            } else {
                if (temp === '00') {
                    return 0;
                }

                if (s[end - 1] === '0') {
                    return 0;
                }

                return dpDecoding(end - 1);
            }
        }

        let temp = s.substring(end - 2,end);
        if (temp in decodingDict) {
            if (temp === "10" || temp === "20") {
                return dpDecoding(end - 2);
            } 
            return dpDecoding(end - 1) + dpDecoding(end - 2);
        } else {
            if (temp === '00') {
                return 0;
            }

            if (s[end - 1] === '0') {
                return 0;
            }

            return dpDecoding(end - 1);
        }
    });

    return dpDecoding(s.length);
};