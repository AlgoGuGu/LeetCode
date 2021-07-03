/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let copyGrid = new Array();
    copyGrid = grid.slice(0);
    let y = grid[0].length;
    const result = [];
    grid = grid.join(',').split(',');
    for (let i = 0; i < grid.length; i++) {
        grid[i] =  +(grid[i]);
    }
    if (k > grid.length) {
        k = Math.floor(k % grid.length);
    }
    const sliceArr = grid.slice(grid.length-k).reverse();
    grid = grid.slice(0,grid.length-k) ;
    for (let i = 0; i < k; i++) {
        grid.splice(0,0,sliceArr[i])
    }
    while (grid.length) {
        result.push(grid.splice(0,y));
    }
    return result;
};

console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]],1));
console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]],4));