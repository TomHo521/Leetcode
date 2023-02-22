/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} from
 * @param {number} to
 * @return {TreeNode}
 */



var correctBinaryTree = function(root) {

    let queue = [[root, null]];
    let levelLength = 1;

    while (queue.length > 0) {

        let newLevel = [];
        let levelCounter = 0;
      
        while (levelCounter < levelLength) {
            levelCounter++;
            let node = queue.shift();
            if (node[0].left) {
                newLevel.push([node[0].left, node[0], 'left']);
            }
            if (node[0].right) {
                newLevel.push([node[0].right, node[0], 'right']);
            }
        }

        //test to see if a right node points to another node in this level.
        for (var j = 0; j < newLevel.length; j++) {
            if (newLevel[j][0].right) {
                for (var i = 0; i < newLevel.length; i++) {
                    if (newLevel[j][0].right === newLevel[i][0]) {
                        // console.log('found the mispointed node at: ', newLevel[j][0]);
                        // console.log('parent at ', newLevel[j][1].val); 
                        if (newLevel[j][2] === 'left') {
                            newLevel[j][1].left = null;
                        } else {
                            newLevel[j][1].right = null;
                        }
                        return root;
                    }
                }
            }
        };

        if (newLevel.length > 0) {
            queue = queue.concat(newLevel);
            levelLength = newLevel.length;
        }
        
    }


    root.left = null;
    return root;
   
    
    
};


//var correctBinaryTree = function(root) {

    // let queue = [{node: root, parent: null}];
    // while (queue.length > 0) {
    //     let node = queue.shift();
    //     let newLevel = [];

    //     //for each node, push the node into the newLevel queue.
    //     if (node.node.left) {
    //         let obj = {
    //             node: node.node.left,
    //             parent: node
    //         }

    //         newLevel.push(obj);
    //     }

    //     if (node.node.right) {
    //         let obj = {
    //             node: node.node.right,
    //             parent: node
    //         }
    //         newLevel.push(obj);
    //     }

    //     //test to see if a right node points to another node in this level.
    //     for (var j = 0; j < newLevel.length; j++) {
    //         if (newLevel[j].node.right) {
    //             for (var i = 0; i < newLevel.length; i++) {
    //                 if (newLevel[j].node.right === newLevel[i].node) {
    //                     console.log('found the mispointed node at: ', newLevel[j].node);
    //                     newLevel[j].parent.right = null;
    //                     return root;
    //                 }
    //             }
    //         }
    //     };

    //     if (newLevel.length > 0) {
    //         queue = queue.concat(newLevel);
    //     }
        
    // }

    // return root;
   
    
    
//};