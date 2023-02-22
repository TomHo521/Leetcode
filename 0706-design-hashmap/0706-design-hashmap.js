var MyHashMap = function() {

    this.hashSize = 100000;
    this.hashableMemory = Array(this.hashSize).fill(undefined);
    
};

MyHashMap.prototype.hash = function(key) {
    let newKey = parseInt(key) % (this.hashSize - 1);
    if (newKey < 0 || newKey > this.hashSize) {
        console.log('exception');
    }

    return newKey;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {

    let k = this.hash(key);

    if (this.hashableMemory[k] == undefined) {
        this.hashableMemory[k] = [[key, value]]
    } else {
                
        for (var i = 0; i < this.hashableMemory[k].length; i++) {
            if (this.hashableMemory[k][i][0] === k) {
                this.hashableMemory[k][i] = [key, value];
            }
        }
        
        this.hashableMemory[k].push([key, value]);
    }
    
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {

    let k = this.hash(key);

    if (!this.hashableMemory[k]) {
        return -1;
    } 

    for (var i = 0; i < this.hashableMemory[k].length; i++) {
        if (this.hashableMemory[k][i][0] === key) {
            return this.hashableMemory[k][i][1]
        }
    }

    return -1;
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {

    let k = this.hash(key);

    if (this.hashableMemory[k] == undefined) {
        return;
    } else {
        let storageBin = this.hashableMemory[k];
        let i = 0;
        while (i < storageBin.length) {
            if (storageBin[i][0] === key) {
                this.hashableMemory[k].splice(i,1);
                if (this.hashableMemory[k].length === 0) {
                    this.hashableMemory[k] = undefined;
                }
            } else {
                i++;
            }
        }
    }



    
};






