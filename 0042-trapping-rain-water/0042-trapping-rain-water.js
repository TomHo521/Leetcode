/**
 * @param {number[]} height
 * @return {number}
 */
var processHeight = function(height) {

    //move to base indexes
    let startIndex = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] >= height[startIndex]) {
            startIndex = i;
        } else {
            break;
        }

    }

    //move to base indices.
    let endIndex = height.length - 1;
    for (let i = height.length - 1; i >= 0; i--) {
        if (height[i] >= height[endIndex]) {
            endIndex = i;
        } else {
            break;
        }
    }

    return height.slice(startIndex, endIndex + 1);

}

var trap = function(height) {

    //console.log(`old height array: `, height);
    height = processHeight(height);
   // console.log(`new height array: `, height);

    var stack = [height[0]];

    var top = function() {
        return stack[stack.length -1];
    }

    water = 0;

    for (var i = 1; i < height.length; i++) {

       // console.log(`i:${i} [${height[i]}] `,  '-heights:', height);

       if (height[i] <= top()) {
           stack.push(height[i]);
           //console.log('stack: ', stack);
           continue;
       } else {

           //console.log('height found greater than top of stack: ', height[i], 'top: ', top());
           //console.log(stack);

            let count = 0;
            while (height[i] >= top() && stack.length > 1) {
                water =  water + (height[i] - stack.pop());
                //console.log('water: ', water);
                count++;
            }
            
            console.log('count is: ', count);

            if (stack.length === 1 && (height[i] >= stack[0])) {
                water = water - ((height[i] - stack[0]) * count);
                //console.log('corrected: ', water);
                stack.pop();
                stack.push(height[i]);
            }

          

            //console.log('after loop stack: ', stack);
            
            if (top() > height[i]) {
                for (var j = 0; j < count + 1; j++) {
                    stack.push(height[i]);
                }
                //console.log('stack after push: ', stack);

            }

            //console.log('stack: ', stack);
       }



    
    }

    return water;    
};