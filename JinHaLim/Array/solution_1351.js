/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    return grid.reduce((acc,curr) => {
        acc += curr.filter(v2 => v2 < 0).length;
        return acc;
    },0);
};
console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))