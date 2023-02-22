/**
 * @param {number[]} height
 * @return {number}
 */



var maxArea = function(height) {
    
    var i = 0, j = height.length - 1;
    
    if (height.length === 2) {
        return Math.min(height[i], height[j]);  // * 1 presumably.
    }
    
    var tempMaxArea = (j - i) * Math.min(height[i], height[j]);
    
    while (i < j) {
        if (height[j] > height[i]) {
            i++;
        } else {
            j--;
        }
        
        let tempArea = (j - i) * Math.min(height[i], height[j]);
        tempMaxArea = Math.max(tempMaxArea , tempArea);
    }
    
    return tempMaxArea;
};