/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let list = [0];
    gain.reduce((acc,curr) => {
        acc += curr;
        list.push(acc);
        return acc;
    },0);
    return Math.max.apply(null,list);
};
console.log(largestAltitude([-5,1,5,0,-7]))