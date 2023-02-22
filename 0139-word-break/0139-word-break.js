/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// class TrieNode {
//     constructor() {
//         this.children = {};
//         this.end = false;
//     }

// }

// class Trie {
//     constructor() {
//         this.root = new TrieNode();
//     }

//     startsWith(prefix) {
//         var tracker = this.root;
//         for (let i=0; i < prefix.length; i++) {
//             if (prefix[i] in tracker.children) {
//                 tracker = tracker.children[prefix[i]];
//             } else {
//                 return false;
//             }
//         }
//         return true;
//     }

//     insert(word) {

//         var tracker = this.root;
//         for (let i=0; i < word.length; i++) {
//             if (word[i] in tracker.children) {
                
//             } else {
//                 tracker.children[word[i]] = new TrieNode();
//                 tracker = tracker.children[word[i]];
//             }
//         }

//         tracker.end = true;
//     }

//     hasWord(word) {
//         var tracker = this.root;
//         for (let i=0; i < word.length; i++) {
//             if (word[i] in tracker.children) {
//                 tracker = tracker.children[prefix[i]];
//             } else {
//                 return false;
//             }
//         }
//         return (tracker.end);
//     }
// }


// //another attemot at wordBreak with Trie
// var wordBreak = (s, wordDict) => {
    

//     let wbTrie = new Trie();
//     wbTrie.insert(s);
//     console.log('checking my Trie! for: ', s);
//     wordDict.forEach(e => console.log(`e: ${e} ${wbTrie.startsWith(e)}`));

//     var any = true;

//     let arr = s.split('');
    

//     while (arr.length > 0 && any !== false) {

//         any = false;
//         for (var i = 0; i < wordDict.length; i++) {
//             let has = wbTrie.startsWith(wordDict[i]);
//             any = any || has;
//             if (has) {
//                 arr.splice(0, wordDict[i].length);
//                 console.log('new S word: ',arr);
//             }
//         }

//     }

//     return any;
    
// };

var memoize = (f) => {

    let cache = {};

    return (...args) => {

        if (args[0] in cache) {
            console.log('calling cache');
            return cache[args[0]];
        }

        let result = f(...args);
        console.log('storing in cache');
        cache[args[0]] = result;
        return result;

    }

}




var wordBreak = (s, wordDict) => {
    //looks like there is a bug in their checking code or underbar even.

    var wordBreakDP = _.memoize((s) => {

        if (s.length === 0 || s === "" || !s) {
            console.log(`${s} starts with ${wordDict[i]}`);
            return true;
        }

        let res = false;
        for (var i = 0; i < wordDict.length; i++) {
            if (s.startsWith(wordDict[i])) {
                let reduced = s.slice(wordDict[i].length);            
                res = res || wordBreakDP(reduced);
            } 
        }
        return res;
    });

    return wordBreakDP(s, wordDict);
};