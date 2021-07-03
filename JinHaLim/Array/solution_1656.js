/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.arr = new Array(n);
    this.ptr = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    let result = [];
    this.arr[idKey-1] = value;
    if(this.ptr === idKey-1){
        while (this.arr[this.ptr] !== undefined) {
            result.push(this.arr[this.ptr]);
            ++this.ptr;
        }
    }
    return result;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
var obj = new OrderedStream(5)
obj.insert(3,'ccccc')
obj.insert(1,'aaaa')
obj.insert(2,'bbbb')
obj.insert(5,'ffff')
obj.insert(4,'ddddd')
var param_1 = obj;
console.log(param_1);