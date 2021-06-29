/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let map = new Map();
    let string = '';
    s.split('').forEach((v,i) => {
        map.set(indices[i],v);
    });
    for (let i = 0; i < map.size; i++) {
        string += map.get(i);
    }
    return string;
};
console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))