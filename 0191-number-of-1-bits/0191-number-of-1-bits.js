/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {

    let h = 0;

    //console.log('input n ', n.toString(2));

    n.toString(2).split('').forEach(e => {if (e === '1') h++});
   
    return h;
    
};