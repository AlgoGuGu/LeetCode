/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let matrix = Array.from(new Array(m), () => new Array(n).fill(0))
    indices.forEach((ele,index) => {
        for (let i = 0; i < n; i++) {
            // console.log(ele[0],matrix);
            matrix[ele[0]][i] += 1;
        }
        for (let j = 0; j < m; j++) {
            matrix[j][ele[1]] += 1;
        }
        
    });
    return matrix.reduce((acc,curr)=>{
        acc += curr.reduce((acc2,curr2) => {
            if(curr2 % 2 === 1) acc2 += 1;
            return acc2;
        },0);
        return acc;
    },0);
};
console.log(oddCells(2,3,[[0,1],[1,1]]))