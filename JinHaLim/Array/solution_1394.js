/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let lucky = [];
    let freqMap = arr.reduce((acc,curr)=>{
        if (acc.has(curr)) {
            acc.set(curr,acc.get(curr)+1);
        }
        else{
            acc.set(curr,1);
        }
        return acc;
    },new Map());
    let keys = [...freqMap.keys()];
    let values = [...freqMap.values()];
    for (let i = 0; i < freqMap.size; i++) {
        if (keys[i] === values[i]) {
            lucky.push(keys[i]);
        }
    }
    if (lucky.length === 0) {
        return -1;
    }
    return Math.max.apply(null,lucky);
};
console.log(findLucky([2,2,3,4]));
console.log(findLucky([4,3,2,2,4,1,3,4,3]))