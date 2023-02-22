/**
 * @param {string} s
 * @return {string}
 */



var frequencySort = function(s) {
    let freqCounter = {}
    let x = s.split('');
    x.forEach(e => {
        if (e in freqCounter) {
            freqCounter[e]++;
        }
        else {
            freqCounter[e] = 1
        }
    });



    let sortedByFreq = Object.keys(freqCounter).sort((a,b) => freqCounter[b] - freqCounter[a]);
    
    //console.log(sortedByFreq);

    let rebuiltString = ""
    sortedByFreq.forEach(e => {
        let next = '';
        for (var i = 0; i < freqCounter[e]; i++) {
            next += e;
        }
        rebuiltString += next;
    });


    return rebuiltString;


    
};