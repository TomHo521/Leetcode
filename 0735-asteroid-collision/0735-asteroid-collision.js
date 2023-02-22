/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

//returns the victor of the collision
var collide = function(a, b) {

}

var asteroidCollision = function(asteroids) {
    if (asteroids.length <= 1) {
        return asteroids;
    }

    var stack  = [asteroids[0]];

    for (var i = 1; i < asteroids.length; i++) {
        stack.push(asteroids[i]);
        //console.log('state: ', stack);
        //loops until the top two elements are the same sign.

        let resolveStack = false;
        while (!resolveStack && stack.length > 1) {
            let l = stack.pop();
            let sl = stack.pop();
            resolveStack = ((l > 0) && (sl > 0)) || ((l < 0) && (sl < 0)) 
                            || ((l > 0) && (sl < 0));
            if (!resolveStack) {
                if (Math.abs(l) > Math.abs(sl)) {
                    stack.push(l);
                    //console.log('state: l > sl ', stack);
                } 
                if (Math.abs(l) < Math.abs(sl)) {
                    stack.push(sl);
                    //console.log('state: sl > l', stack);
                } 
            } else {
                stack.push(sl);
                stack.push(l);
            }
        }
    }
    //console.log(stack);
    return stack;  
};