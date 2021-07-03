/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let result = [];
    let line = [];
    for (let i = 0; i < matrix[0].length; i++) {
        line = [];
        for (let j = 0; j < matrix.length; j++) {
            line.push(matrix[j][i]);
        }
        result.push(line);
    }
    return result;
};
console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))