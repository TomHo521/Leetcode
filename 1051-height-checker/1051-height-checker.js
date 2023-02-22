/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
    let res = 0
    let ex = heights.slice(0).sort((a,b) => a-b);
    
    ex.forEach((e,i) => {if (heights[i]!==e) {
        res++
    }
                                                      
        }
    );
    
    //console.log(ex)
    return res;
    
};