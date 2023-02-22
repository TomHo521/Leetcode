

var TrieNode = function () {
    return {
        children: {},
        end: false,
    }
}

var Trie = function() {

    this.root = TrieNode();
    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {

    let current = this.root;

    for (let c of word) {
        if (c in current.children) {
            current = current.children[c];
        } else {
            current.children[c] = TrieNode();
            current = current.children[c];
        }
    }

    current.end = true;
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {

    let current = this.root;

    for (let c of word) {
        if (c in current.children) {
            current = current.children[c];
        } else {
            return false;
        }
    }

    return (current.end);
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

    let current = this.root;
   
    for (let c of prefix) {
        if (c in current.children) {
            current = current.children[c];
        } else {
            return false;
        }
    }

    return true;
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */