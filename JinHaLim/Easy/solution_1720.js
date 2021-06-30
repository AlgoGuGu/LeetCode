/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let arr = new Array(encoded.length + 1);
    arr[0] = first;
    encoded.forEach((v,i) => {
        arr[i+1] = v ^ arr[i];
    });
    return arr;
};
console.log(decode([1,2,3],1))