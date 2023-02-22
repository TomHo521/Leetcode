/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */




var findOrder = function(numCourses, prerequisites) {
    //build graph
    let graph = new Map();
    let queue = []; 
    let inDegree = Array(numCourses).fill(0);
    let topologicalOrdering = [];
    
    //build the adjacency list.
    for ([e,v] of prerequisites) {

        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }
        inDegree[e]++;
    }

    //populate queue.  The indegree is a reference by node ID
    //this is where more nodes than found in prereq list may be generated.
    // Ex.  prereq = [[0,1]], numCourses = 2, means that a node with ID 2 is also part of the graph
    for (var i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    while (queue.length) {
        v = queue.shift();

        //for every node, we surf adjacency list and decrement inDegree.
        if (graph.has(v)) {
            graph.get(v).forEach((e) => {
                inDegree[e]--;
                if (inDegree[e]===0) queue.push(e)
            });
        }

        topologicalOrdering.push(v);
    }

    //cycle found
    if (topologicalOrdering.length !== numCourses) {
        return [];
    }

    return topologicalOrdering;
}


// let cycleFound = false;

// var DFS = function(node, adjList, visited, topoSeq, path) {

//     visited[node] = true;
//     console.log('setting visited Node to true: ', node);
    
//     for (var i = 0; i < adjList[node].length; i++) {
//         let nextNode = adjList[node][i];
//         if (!visited[nextNode]) {
//             path[nextNode] = true;
//             console.log('DFS: calling DFS with path: ', path, " nextnode: ", nextNode);
//             cycleFound = DFS(nextNode, adjList, visited, topoSeq, path);
//             delete path[nextNode];
//             if (cycleFound) return true;
            
            
//         } else {
//             if (nextNode in path) {
//                 console.log('cycle found in "callstack": ', path);
//                 console.log('nextNode: ', nextNode);

                
                
//                 return true;
//             }
//         }
//     }

//     topoSeq.push(node);
//     return false;
// }

// var TopologicalSort = function (adjList, visited) {

//     var topologicalOrdering = [];

//     Object.keys(adjList).forEach(node => {
//         let topoSeq = [];
//         let path = {[node]:true};
//         if (!visited[node]) {
//             console.log('topo: calling DFS with path: ', path, 'node: ', node);
//             DFS(node, adjList, visited, topoSeq, path);

//             if (cycleFound) {
//                 return [];
//             } 

//             console.log('why does it get here? ', node);
//             topologicalOrdering = topologicalOrdering.concat(topoSeq);
//         }
//     });

    
//     return topologicalOrdering;
// }

// var findOrder = function(numCourses, prerequisites) {

//     if (prerequisites.length === 0) {
//         let res = [];
//         for (var i = numCourses - 1; i >= 0; i--) {
//             res.push(i);
//         }
//         return res;
//     }

//     //FORMATTING: INITIALIZE THE ADJ LIST
//     var adjList = {};
//     prerequisites.forEach(e => {
//         if (e[1] in adjList) {
//             adjList[e[1]].push(e[0]);
//         } else {
//             adjList[e[1]] = [e[0]];
//         }
//     });

//     prerequisites.forEach(e => {
//         if (!(e[0] in adjList)) {
//             adjList[e[0]] = [];
//         }
//     });

//    // console.log('final adj list ', adjList);

//     //FORMATTING: INITIALIZE THE VISITED LIST
//     var visited = {};
//     Object.keys(adjList).forEach(e => visited[e] = false);

//    // console.log('final visited: ', visited);

//     //CALL 
//     let result = TopologicalSort(adjList, visited).reverse();

//     if (result.length === 0) {
//         return [];
//     }

//     if (numCourses > result.length) {
//         for (var n = numCourses - 1; numCourses > result.length; n--) {
//             result.unshift(n);
//         }
//     }
    
//     return result;
// };