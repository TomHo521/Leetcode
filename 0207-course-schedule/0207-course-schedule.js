/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let graph = new Map();
    let queue = []; let inDegree = Array(numCourses).fill(0);
    let ordering = [];

    for ([e,v] of prerequisites) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }
        inDegree[e]++;
    }

    inDegree.forEach((e,i) => {if (e === 0) queue.push(i)});

    while (queue.length) {
        v = queue.shift();
        if (graph.has(v)) {
            graph.get(v).forEach(e => {
                inDegree[e]--;
                if (inDegree[e] === 0) {
                    queue.push(e);
                }
            });
        }
        ordering.push(v);
    }

    return (numCourses === ordering.length);

    
};