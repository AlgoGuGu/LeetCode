/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let cost = 0;
    let start = new Set(position);
    let startArr = [...start.keys()];
    return Math.min.apply(null,startArr.reduce((acc,curr) => {
        cost = 0;
        for (let i = 0; i < position.length; i++) {
            const ele = Math.abs(position[i]-curr);
            if (ele % 2 === 1) {
                cost += 1;
            }
        }
        acc.push(cost);
        return acc;
    },[]));
};
console.log(minCostToMoveChips([2,3,3]));
console.log(minCostToMoveChips([6,4,7,8,2,10,2,7,9,7]));
// console.log(minCostToMoveChips([1,1000000000]));